from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

from ai_model.predict import predict_image
from utils.optimizer import optimize
from utils.bias_check import bias_check

app = Flask(__name__)
CORS(app)

# -------------------------------
# SIMPLE USER STORE (DEMO)
# -------------------------------
users = {
    "citizen@test.com": {
        "password": generate_password_hash("1234"),
        "role": "citizen"
    },
    "authority@test.com": {
        "password": generate_password_hash("1234"),
        "role": "authority"
    },
    "company@test.com": {
        "password": generate_password_hash("1234"),
        "role": "company"
    }
}

# -------------------------------
# LOGIN API
# -------------------------------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    user = users.get(email)

    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    return jsonify({
        "role": user["role"]
    })

# -------------------------------
# AI WASTE CLASSIFICATION API
# -------------------------------
@app.route("/classify", methods=["POST"])
def classify():
    image = request.files["image"]

    label, confidence = predict_image(image)

    return jsonify({
        "category": label,
        "confidence": confidence,
        "bias_note": bias_check(confidence),
        "recycling_method": optimize(label)
    })

# -------------------------------
# MAIN
# -------------------------------
if __name__ == "__main__":
    app.run(debug=True)
