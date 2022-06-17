import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

export const useArticles = (topic, sortBy) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sortBy)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
        setErrorMessage("");
      })
      .catch(() => {
        setArticles([]);
        setIsLoading(false);
        setErrorMessage("No articles found!");
      });
  }, [topic, sortBy]);

  return { articles, isLoading, errorMessage };
};
