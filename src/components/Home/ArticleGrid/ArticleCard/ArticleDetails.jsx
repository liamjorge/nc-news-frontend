import styles from "./ArticleDetails.module.css";
import { useArticleDetails} from "../../../../hooks/useArticleDetails"
import LoadingSpinner from "../../../Shared/LoadingSpinner"

const ArticleDetails = (props) => {
    const {articleId, handleOnClick} = props;
    const {articleDetails, isLoading } = useArticleDetails(articleId)

    return (
        <div className={styles['article-details']} onClick={() => handleOnClick()}>
            {isLoading
                ? <LoadingSpinner />
                : <p>{articleDetails.body}</p>
            }
        </div>
    )
}

export default ArticleDetails;