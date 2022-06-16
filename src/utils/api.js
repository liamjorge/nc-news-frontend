import axios from "axios";

const baseURL = "https://liamjorge-nc-news.herokuapp.com/api";

export const fetchArticles = (topic) => {
  let topicQuery = "";
  if (topic !== "all") {
    topicQuery = `topic=${topic}`;
  }
  return axios
    .get(`${baseURL}/articles?${topicQuery}`)
    .then((response) => response.data.articles);
};

export const fetchArticleDetails = (article_id) =>
  axios
    .get(`${baseURL}/articles/${article_id}`)
    .then((response) => response.data.article);
