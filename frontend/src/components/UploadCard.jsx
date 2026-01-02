import { useState } from "react";
import axios from "axios";

export default function UploadCard() {
  const [result, setResult] = useState(null);

  const upload = async (e) => {
    const form = new FormData();
    form.append("image", e.target.files[0]);

    const res = await axios.post(
      "http://127.0.0.1:5000/classify",
      form
    );

    setResult(res.data);
  };

  return (
    <div className="card" style={{ marginTop: "20px" }}>
      <h3>Upload Waste Image</h3>
      <input type="file" onChange={upload} />

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Category:</b> {result.category}</p>
          <p><b>Confidence:</b> {(result.confidence*100).toFixed(2)}%</p>
          <p>{result.bias_note}</p>
          <p><b>Recycling Method:</b> {result.recycling_method}</p>
        </div>
      )}
    </div>
  );
}
