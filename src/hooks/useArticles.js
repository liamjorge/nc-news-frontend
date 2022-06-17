import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

export const useArticles = (topic, sortBy) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage("Unable to fetch articles");
      });
  }, [topic, sortBy]);

  return { articles, isLoading, errorMessage };
};
