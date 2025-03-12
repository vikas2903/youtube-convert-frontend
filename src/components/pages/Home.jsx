import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <form autocomplete="off" method="post">
          <div><label for="video">Insert a YouTube video URL</label></div>
          <div><input id="video" type="text" name="video" placeholder="youtube.com/watch?v=j0u7ub3m473" autofocus="" required="" />
          <button id="format" type="button">MP3</button>
          <button type="submit">Convert</button></div>
      </form>

      <div className="content">
        <h4>YouTube to MP3 Converter</h4>
        <p>Our YouTube to MP3 Converter allows you to convert your favorite YouTube videos to MP3 (audio) or MP4 (video) files and to download them for FREE. <Link to="/"><b>Y2Mate</b></Link> works on your desktop, tablet and mobile device without the installation of any additional apps. The usage of Y2Mate is free, and safe!</p>
        <h6>How to download YouTube videos?</h6>
        <p>1. Go to YouTube.com and search for a video you would like to download. Then copy the video URL from the browser address bar (youtube.com/watch?v=id).</p>
        <p>2. Paste the video URL in our YouTube Converter, and choose your preferred download format. You can choose between MP3 or MP4. If you do not choose any format the video will be converted by default to MP3. Click on the „Convert” button.</p>
        <p>3. The conversion of the video will start, and it may take some time. Please note that it is only possible to download YouTube videos with a maximum length of 60 minutes. As soon as the conversion is completed you will be able to download the converted video.</p>
        <p>With the usage of Y2Mate you are accepting our Terms of Use. Thank you for your support by using our YouTube Converter.</p>

      </div>

    

      
    </>
  )
}
export default Home;
