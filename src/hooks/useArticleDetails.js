import { useState, useEffect } from "react";
import { fetchArticleDetails } from "../utils/api";

export const useArticleDetails = (articleId) => {
  const [articleDetails, setArticleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchArticleDetails(articleId)
      .then((detailsFromApi) => {
        setArticleDetails(detailsFromApi);
        setIsLoading(false);
        setErrorMessage("");
      })
      .catch(() => {
        setArticleDetails({});
        setIsLoading(false);
        setErrorMessage("This article wasn't found!");
      });
  }, [articleId]);

  return { articleDetails, isLoading, errorMessage };
};
