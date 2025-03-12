import React from "react";

function Faq() {
  return (
    <div className="text">
      <h4>Frequently Asked Questions</h4>
      <p>
        <b>Which platforms are supported?</b> <br />
        Currently we only support YouTube.
      </p>
      <p>
        <b>Which formats are supported?</b> <br /> Atm it is only possible to
        convert YouTube videos to <b>MP3</b> (audio) or MP4 (video) files.
      </p>
      <p>
        <b>I am receiving an error.</b> <br /> Please make sure that your video
        is not: <br />• Longer then 60 minutes
        <br />• Age restricted <br />• Only available in few countries
      </p>
    </div>
  );
}

export default Faq;
