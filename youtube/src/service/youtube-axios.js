class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }
  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId })); //popular 25개의 비디오에서는 id가 그대로 unique한 값을 가지고 있찌만 search로 25개의 비디오를 받아올떄는 id가 객체로 돼있고 그안에 unique한 값이 들어가 있기 떄문에 한번더 분류해준거 원래의 item을 받아서 id값만 id안에있는 videoId로 주겠다.
  }
}

export default Youtube;
