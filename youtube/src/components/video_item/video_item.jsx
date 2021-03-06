import React, { memo } from "react";
import styles from "../video_item/video_item.module.css";

const VideoItem = memo(({ video, onVideoClick, display }) => {
  //props를 deconstructing하여 결국 snippet으로 바꿔줬다
  const displayType = display === "list" ? styles.list : styles.grid; // a? b:c a가맞으면 b를하고 아니면 c를해라
  const moveToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <li
      onClick={() => {
        onVideoClick(video);
        moveToTop();
      }}
      className={`${styles.container} ${displayType}`}
    >
      <div className={styles.vide}>
        <img
          alt="로딩중입니다."
          src={video.snippet.thumbnails.default.url}
          className={styles.thumbnail}
        ></img>
        <div className={styles.videoTextBox}>
          <div className={styles.title}>{video.snippet.title}</div>
          <div className={styles.channel}>{video.snippet.channelTitle}</div>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
