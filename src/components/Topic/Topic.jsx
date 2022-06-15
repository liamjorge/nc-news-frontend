import Filter from "../Shared/Filter"
import ArticleGrid from "../Shared/ArticleGrid/ArticleGrid"
import { useParams } from "react-router-dom"

const Topic = () => {
    const { topic } = useParams()
    return (
        <main>
            <Filter />
            <p>View all articles related to {topic}</p>
            <ArticleGrid topic={topic}/>
        </main>
    )
}

export default Topic