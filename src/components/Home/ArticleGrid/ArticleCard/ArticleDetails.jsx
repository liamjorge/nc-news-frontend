import styles from "./ArticleDetails.module.css";

const ArticleDetails = (props) => {
    const {articleInfo, handleOnClick} = props;
    return (
        <div className={styles['article-details']} onClick={() => handleOnClick()}>
            <p>More details on this article ({articleInfo.title}) will go here</p>
        </div>
    )
}

export default ArticleDetails;