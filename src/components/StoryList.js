import StoryItem from "./StoryItem"

const StoryList = ({storyIds}) => {


    const storyItems = storyIds.map((id) => {
      return <StoryItem id={id} key={id}/>
    })



    //   return <StoryItem key={storyIds} article={storyIds}/>


    return (
        <div>
            <h1>Articles</h1>
            {/* {storyIds[0]} */}
            <ul>
                {storyItems}
            </ul>
        </div>
    )
}

export default StoryList