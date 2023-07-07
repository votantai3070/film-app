import React from "react";

const YoutubeVideo = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-video">
      <iframe
        title="YouTube video"
        width="560"
        height="315"
        src={embedUrl}
        // frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
