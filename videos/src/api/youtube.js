import axios from "axios";

const KEY = "AIzaSyCZo4qdE5fyrd6HKyfOw2rLP-Uq20fEdpU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});