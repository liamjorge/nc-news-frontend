import axios from "axios";

const baseURL = "https://liamjorge-nc-news.herokuapp.com/api";

const fetchArticles = () =>
  axios.get(`${baseURL}/articles`).then((response) => response.data.articles);

export default fetchArticles;
