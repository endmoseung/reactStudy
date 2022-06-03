import React, { useEffect, useState } from "react";
import Search from "./components/search";
import "./app.css";
import VideoList from "./components/video_list/video_list";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCZhmvN-I3R8J0z_kGPqOpOI07eE4VQ_1w",
      requestOptions
    )
      .then((response) => response.json()) //text를 json으로
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const handleSearch = (inputValue) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputValue}&key=AIzaSyCZhmvN-I3R8J0z_kGPqOpOI07eE4VQ_1w`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSearch(result.items))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="appWrapper">
      <Search onAdd={handleSearch}></Search>
      <VideoList search={search} videos={videos} />
    </div>
  );
};

export default App;
