import axios from "axios";
const KEY = "AIzaSyDMpoaMiLXL5oFVXLxAE5of2HgbpPU8Pgg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY
  }
});
