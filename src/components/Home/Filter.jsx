import { useLocation } from 'react-router-dom'
const Filter = (props) => {
    const {topic, setTopic, sortBy, setSortBy} = props;
    const location = useLocation();

    return (
        <section>
            {/* convert this to a dropdown that maps all topics */}
            <div className={location.pathname.includes("topics") ? "hidden" : ""}>
                <button type="button" className={topic === "coding"? "hidden" : ''} onClick={()=>{setTopic("coding")}}>Coding</button>
                <button type="button" className={topic === "cooking"? "hidden" : ''} onClick={()=>{setTopic("cooking")}}>Cooking</button>
                <button type="button" className={topic === "football"? "hidden" : ''} onClick={()=>{setTopic("football")}}>Football</button>
            </div>
            <div onChange={(event) => {setSortBy(event.target.value)}}>
                <input type="radio" value="created_at" name="sortBy" checked={sortBy === "created_at" || sortBy === null} /> Date
                <input type="radio" value="comment_count" name="sortBy" checked={sortBy === "comment_count"}/> Comments
                <input type="radio" value="votes" name="sortBy" checked={sortBy === "votes"} /> Votes
            </div>
        </section>
    )
}

export default Filter