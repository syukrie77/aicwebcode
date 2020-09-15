import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe width="560" height="315"
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    />
  </div>
)

export default Video
