class ImageUploader {
  async upload(file) {
    // 사용자가 파일을 업로드하면 서버에 저장된 그파일의 url을 보내준다
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "moseung");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dt6dgd3ce/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
