// storyId = https://hacker-news.firebaseio.com/v0/topstories.json
// Main url = https://hacker-news.firebaseio.com/v0/{storyId}.json

import { useEffect, useState } from "react"
import StoryList from "../components/StoryList"

const MainContainer = () => {
  
    const [storyIds, setStoryIds] = useState([]) // MAP STORY IDS INTO SOMETHING
    const [articles, setArticles] = useState(34968769)

    useEffect(() => {
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res =>res.json())
      .then(data =>setStoryIds(data))

      const handleSelectChange = (storyIds) => {
        const articlePromises = storyIds.map((id) => {
          return fetch()
        })
      }
      Promise.all()


    //   storyIds.map((id) => {
    //     setArticles((`https://hacker-news.firebaseio.com/v0/item/${id}.json`))

    

      }, [])






    return(
        <div>
            <h1>test</h1>
            {articles}
            {/* {storyIds} */}
            <StoryList storyIds={storyIds}/>
        </div>
    )
}

export default MainContainer;