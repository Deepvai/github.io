import { useState } from "react";
import axios from "axios";

export default function FileUploader() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://your-api.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Upload success:", response.data);
    } catch (error) {
      console.error("Upload failed:", error.message);
    }
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
}
