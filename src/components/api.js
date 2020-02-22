import axios from "axios";

const KEY = "ddccc81d-616e-4319-ad18-f6e17d29319b";

export default axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": KEY
  }
});
