import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
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
  }, []);

  return { articles, isLoading, errorMessage };
};
