import { useState, useEffect } from "react";
import { fetchArticleDetails } from "../utils/api";

export const useArticleDetails = (articleId) => {
  const [articleDetails, setArticleDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleDetails(articleId).then((detailsFromApi) => {
      setArticleDetails(detailsFromApi);
      setIsLoading(false);
    });
  }, [articleId]);

  return { articleDetails, isLoading };
};
