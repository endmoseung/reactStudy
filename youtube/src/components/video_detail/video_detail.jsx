import React from "react";
import styles from "../video_detail/video_detail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <div className={styles.videoDetailWrapper}>
      <iframe
        width=""
        height=""
        src={`https://www.youtube.com/embed/${video.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.iframe}
      ></iframe>
      <div className={styles.videoTitle}>{video.snippet.title}</div>
      <div className={styles.videoChannelTitle}>
        {video.snippet.channelTitle}
      </div>
      <div className={styles.videoDescription}>{video.snippet.description}</div>
    </div>
  );
};
export default VideoDetail;
