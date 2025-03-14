import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const BACKEND_URL = "https://youtube-converter-backend-production.up.railway.app";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    try {

      const response = await axios.get(`${BACKEND_URL}/download`, {
        params: { url, format },
      });

      if (response.data.success) {
        setDownloadUrl(response.data.downloadLink);
      } else {
        setError("Error downloading the file");
      }
    } catch (error) {
      setError("Failed to process video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {loading ? (
            <p style={{ textAlign: "center" }}>Initializing conversion...</p>
          ) : downloadUrl ? (
            <div style={{ textAlign: "center" }}>
              <p>
                Download Link:{" "}
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
                  <button type="button" onClick={() => setFormat("mp3")}>
                    MP3
                  </button>
                  <button type="submit">Convert</button>
                </div>
              </div>
            </>
          )}
        </form>
      </div>

      <div className="content">
        <h4>YouTube to MP3 Converter</h4>
        <p>
          Our YouTube to MP3 Converter allows you to convert your favorite
          YouTube videos to MP3 (audio) or MP4 (video) files and download them
          for FREE.{" "}
          <Link to="/">
            <b>Y2Mate</b>
          </Link>{" "}
          works on your desktop, tablet, and mobile device without the
          installation of any additional apps. The usage of Y2Mate is free and
          safe!
        </p>

        <h6>How to download YouTube videos?</h6>
        <p>
          1. Go to YouTube.com and search for a video you would like to
          download. Then copy the video URL from the browser address bar
          (youtube.com/watch?v=id).
        </p>
        <p>
          2. Paste the video URL in our YouTube Converter and choose your
          preferred download format. You can choose between MP3 or MP4. If you
          do not choose any format, the video will be converted by default to
          MP3. Click on the "Convert" button.
        </p>
        <p>
          3. The conversion of the video will start, and it may take some time.
          Please note that it is only possible to download YouTube videos with a
          maximum length of 60 minutes. As soon as the conversion is completed,
          you will be able to download the converted video.
        </p>
        <p>
          By using Y2Mate, you agree to our Terms of Use. Thank you for your
          support in using our YouTube Converter.
        </p>
      </div>
    </>
  );
}

export default Home;
