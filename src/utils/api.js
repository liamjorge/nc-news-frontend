import axios from "axios";

const baseURL = "https://liamjorge-nc-news.herokuapp.com/api";

export const fetchArticles = () =>
  axios.get(`${baseURL}/articles`).then((response) => response.data.articles);
