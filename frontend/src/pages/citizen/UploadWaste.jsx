import { useState } from "react";
import axios from "axios";

export default function UploadWaste() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeWaste = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:5000/classify",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(res.data);
    } catch (err) {
      alert("Backend not running or error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* IMAGE CARD */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">Upload Waste Image</h2>

        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="rounded-lg mb-4 max-h-64 object-contain"
          />
        ) : (
          <div className="h-48 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400">
            No image selected
          </div>
        )}

        <input
          type="file"
          className="mt-4"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
          }}
        />

        <button
          onClick={analyzeWaste}
          className="btn-primary mt-4 w-full"
        >
          {loading ? "Analyzing..." : "Analyze Waste"}
        </button>
      </div>

      {/* RESULT CARD */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Classification Result
        </h2>

        {result ? (
          <>
            <p>
              <b>Category:</b>{" "}
              <span className="capitalize">
                {result.category}
              </span>
            </p>
            <p>
              <b>Confidence:</b>{" "}
              {(result.confidence * 100).toFixed(2)}%
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {result.bias_note}
            </p>

            <div className="mt-4">
              <p className="font-semibold mb-2">
                Recycling Method
              </p>
              <p className="text-green-700 font-medium">
                {result.recycling_method}
              </p>
            </div>
          </>
        ) : (
          <p className="text-gray-400">
            Upload an image to see results
          </p>
        )}
      </div>
    </div>
  );
}
