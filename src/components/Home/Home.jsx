import Filter from "./Filter"
import ArticleGrid from "./ArticleGrid/ArticleGrid"
import { useState } from "react"

const Home = () => {
    const [topic, setTopic] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    return (
        <main>
            <Filter topic={topic} setTopic={setTopic} sortBy={sortBy} setSortBy={setSortBy}/>
            <ArticleGrid topic={topic} sortBy={sortBy}/>
        </main>
    )
}

export default Home