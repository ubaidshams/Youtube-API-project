import axios from "axios";

const KEY = "API-KEY";

export let baseParams = {
  key: KEY,
  maxResults: 10,
  part: "snippet",
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
