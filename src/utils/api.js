import axios from "axios";

const baseURL = "https://liamjorge-nc-news.herokuapp.com/api";

export const fetchArticles = (topic, sortBy) => {
  const params = { topic: topic, sort_by: sortBy };
  return axios
    .get(`${baseURL}/articles`, { params })
    .then((response) => response.data.articles);
};

export const fetchArticleDetails = (article_id) =>
  axios
    .get(`${baseURL}/articles/${article_id}`)
    .then((response) => response.data.article);
