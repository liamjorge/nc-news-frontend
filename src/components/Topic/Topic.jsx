import Filter from "../Home/Filter"
import ArticleGrid from "../Home/ArticleGrid/ArticleGrid"
import { useParams } from "react-router-dom"
import { useState } from "react"

const Topic = () => {
    const { topic } = useParams()
    const [sortBy, setSortBy] = useState(null)

    return (
        <main>
            <h2>All {topic} articles</h2>
            <Filter sortBy={sortBy} setSortBy={setSortBy}/>
            <ArticleGrid topic={topic} sortBy={sortBy}/>
        </main>
    )
}

export default Topic