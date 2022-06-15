import styles from "./ArticleDetails.module.css";
import { useArticleDetails} from "../../../../hooks/useArticleDetails"

const ArticleDetails = (props) => {
    const {articleId, handleOnClick} = props;
    const {articleDetails, isLoading } = useArticleDetails(articleId)

    return (
        <div className={styles['article-details']} onClick={() => handleOnClick()}>
            {!isLoading
                ? <p>{articleDetails.body}</p>
                : <p>Loading...</p>
            }
        </div>
    )
}

export default ArticleDetails;