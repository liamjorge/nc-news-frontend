import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import Navbar from "../Shared/Navbar"
import Filter from "../Home/Filter"
import ArticleGrid from "../Home/ArticleGrid/ArticleGrid"
import { useParams } from "react-router-dom"
import { useState } from "react"

const Topic = () => {
    const { topic } = useParams()
    const [sortBy, setSortBy] = useState(null)

    return (
        <>
            <Navbar/>
            <Header/>
            <main>
                <h2>All {topic} articles</h2>
                <Filter sortBy={sortBy} setSortBy={setSortBy}/>
                <ArticleGrid topic={topic} sortBy={sortBy}/>
            </main>
            <Footer/>
        </>
    )
}

export default Topic