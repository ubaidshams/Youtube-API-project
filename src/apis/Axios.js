import axios from "axios";

const KEY = "AIzaSyBLiQqnRf2d_ZMT95SQZxj4a8y_vyjqfPM";

export let baseParams = {
  key: KEY,
  maxResults: 10,
  part: "snippet",
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
