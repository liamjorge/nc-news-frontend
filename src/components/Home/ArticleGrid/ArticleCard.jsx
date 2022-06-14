const ArticleCard = (props) => {
    const {articleInfo} = props;
    return (
        <article>
            <p className="article-card-topic">{articleInfo.topic}</p>
            <h3 className="article-card-title">{articleInfo.title}</h3>
            <h3 className="article-card-title">{articleInfo.title}</h3>
            <p className="article-card-posted-on">Posted x hours ago by {articleInfo.author}</p>
            <p className="article-card-comments">{articleInfo.comment_count} comments</p>
            <p className="article-card-votes">{articleInfo.votes} votes</p>
        </article>
    )
}

export default ArticleCard