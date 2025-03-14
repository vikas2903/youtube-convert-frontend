import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [url, setUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Backend API URL (Update if deployed)
  const BACKEND_URL = "http://localhost:5000";

  const handleSubmit = async (e) => {
    console.log("🔹 Submitting URL:", url);
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    // Trim spaces & encode the URL properly
    const cleanedUrl = url.trim();

    try {
      const response = await axios.get(`${BACKEND_URL}/convert`, {
        params: { url: cleanedUrl }, // Use cleaned URL
      });

      if (response.data.downloadUrl) {
        setDownloadUrl(response.data.downloadUrl);
      } else {
        setError("Error: Unable to process the video.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError("Failed to process video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {loading ? (
          <p style={{ textAlign: "center" }}>Initializing conversion...</p>
        ) : downloadUrl ? (
          <div style={{ textAlign: "center" }}>
            <p>
              Download Link: {" "}
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                Download
              </a>
            </p>
          </div>
        ) : (
          <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <label htmlFor="video">Insert a YouTube video URL</label>

            <div className="modell">
              <input
                id="video"
                type="text"
                name="video"
                placeholder="youtube.com/watch?v=j0u7ub3m473"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className="button-wrapper">
                <button type="submit">Convert to MP3</button>
              </div>
            </div>
          </>
        )}
      </form>

      <div className="content">
        <h4>YouTube to MP3 Converter</h4>
        <p>
          Our YouTube to MP3 Converter allows you to convert your favorite
          YouTube videos to MP3 (audio) or MP4 (video) files and download them
          for FREE. {" "}
          <Link to="/">
            <b>Y2Mate</b>
          </Link>{" "}
          works on your desktop, tablet, and mobile device without the
          installation of any additional apps. The usage of Y2Mate is free and
          safe!
        </p>
      </div>
    </div>
  );
}

export default Home;
