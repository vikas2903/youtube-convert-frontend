import React, { useState } from "react";
import Content from "../../Content";

function Home() {
  const [url, setUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const BACKEND_URL = "https://youtube-backend-01.onrender.com";
  const BACKEND_URL = "https://youtube-backend-01.onrender.com"; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadUrl(null);


    try {
      const response = await fetch(`${BACKEND_URL}/convert?url=${url}`, {
        method: "GET",
        
      });

      if (!response.ok) {
        throw new Error("Failed to process the request.");
      }

      const data = await response.json();
      console.log(data)

      setDownloadUrl(data.details.downloadUrl);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="video">Insert a YouTube video URL</label>
        <div className="modell">
          <input
            id="video"
            type="text"
            name="video"
            placeholder="youtube.com/watch?v=your-video-id"
    
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="button-wrapper">
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Convert to MP3"}
            </button>
          </div>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {downloadUrl && (
        <div style={{ textAlign: "center" }}>
          <p>
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              Download MP3
            </a>
          </p>
        </div>
      )}

      < Content />
    </div>
  );
} 

export default Home;
