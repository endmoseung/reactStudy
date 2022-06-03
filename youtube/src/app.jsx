import React, { useEffect, useState } from "react";
import Search from "./components/search/search";
import styles from "./app.module.css";
import VideoList from "./components/video_list/video_list";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.appWrapper}>
      <Search onSearch={search}></Search>
      <VideoList search={search} videos={videos} />
    </div>
  );
};

export default App;
