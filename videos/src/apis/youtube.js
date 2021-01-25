import axios from "axios";
const KEY = 'AIzaSyCT6Hy-92If434LbILkxXTtJpETo4jmibU';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'Video',
    maxResults: "5",
    key: KEY
  }
});
