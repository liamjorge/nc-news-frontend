import { useState, useEffect } from "react";
import { fetchArticleDetails } from "../utils/api";

export const useArticleDetails = (articleId) => {
  const [articleDetails, setArticleDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage("Unable to fetch article details");
      });
  }, [articleId]);

  return { articleDetails, isLoading, errorMessage };
};
