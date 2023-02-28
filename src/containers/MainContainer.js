// storyId = https://hacker-news.firebaseio.com/v0/topstories.json
// Main url = https://hacker-news.firebaseio.com/v0/{storyId}.json

import { useEffect, useState } from "react"
import StoryList from "../components/Articles"


const MainContainer = () => {

    const [articles, setArticles] = useState([])
    const [ids, setIds] = useState([])

    useEffect(() => {
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(r => r.json())
      .then(data => setIds(data))
    }, [])

    const articlePromises = ids.slice(0, 5).map((id) => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(r => r.json())
    })
    Promise.all(articlePromises)
    .then((data) => {
      setArticles(data)
    })

 // articles[0]['by']

    return(
        <div>
            <h1>Main Container</h1>
            {ids[0]}
            <br></br>
            {/* {articles[0]['title']} */}

        </div>
    )
}

export default MainContainer;