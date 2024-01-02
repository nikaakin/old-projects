import axios from "axios";
const KEY = "AIzaSyBL3GElmvYt7PuF57jkFGsxNidnBKFCtVo";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    type: "video",
    key: KEY,
  },
});
