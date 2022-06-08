import axios from "axios";

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      // axios에서 기본적으로 생성해줘야되는 아이들
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: key },
    });
  }
  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return response.data.items;
  }
  async search(query) {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        q: { query },
        maxResults: 25,
        type: "video",
      },
    });
    return response.data.items;
  }
}

export default Youtube;
