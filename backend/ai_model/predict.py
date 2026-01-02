import tensorflow as tf
import numpy as np
from PIL import Image
import os

BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "model.h5")

model = tf.keras.models.load_model(MODEL_PATH)

classes = ["glass", "organic", "metal", "paper", "plastic"]

def predict_image(img):
    image = Image.open(img).convert("RGB").resize((224,224))
    arr = np.expand_dims(np.array(image)/255.0, axis=0)
    preds = model.predict(arr)[0]
    return classes[np.argmax(preds)], float(np.max(preds))
