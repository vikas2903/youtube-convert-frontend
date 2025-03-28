import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [url, setUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Updated Backend URL
  const BACKEND_URL = "https://youtube-backend-01.onrender.com/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    const cleanedUrl = url.trim();

    console.log("🔹 Processing URL:", cleanedUrl);

    try {
      const response = await axios.get(`${BACKEND_URL}/convert`, {
        params: { url: cleanedUrl },
      });

      console.log("🔹 API Response:", response.data);

      if (response.data.downloadLink) {
        setDownloadUrl(response.data.downloadLink);
      } else {
        setError("Error: Unable to process the video.");
      }
    } catch (error) {
      console.error("API Error:", error);

      if (error.response?.status === 429) {
        setError(
          "YouTube is limiting downloads (Error 429). Please wait and try again."
        );
      } else if (error.response?.status === 400) {
        setError("Invalid YouTube URL. Please enter a valid URL.");
      } else {
        setError("Failed to process video. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {loading ? (
          <p style={{ textAlign: "center" }}>Processing, please wait...</p>
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
                Download MP3
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
                placeholder="youtube.com/watch?v=your-video-id"
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
          Convert YouTube videos to MP3 (audio) and download them instantly for
          free. <Link to="/">Y2Mate</Link> works on all devices without requiring
          additional apps.
        </p>

        <h6>How to download YouTube videos?</h6>
        <p>1. Copy the YouTube video URL from your browser.</p>
        <p>2. Paste the URL into our converter and click "Convert." </p>
        <p>3. Click the "Download" button once the conversion is complete.</p>

        <p>Note: Maximum supported video length is 60 minutes.</p>

        <a href="https://vikasprasad.in.net">Vikas Prasad 02</a>
      </div>
    </div>
  );
}

export default Home;
