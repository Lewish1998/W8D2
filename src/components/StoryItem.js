

const StoryItems = ({id}) => {
  




    return(
        <div>
            <li>{id}</li>
            <li><a>`https://hacker-news.firebaseio.com/v0/${id}.json`</a></li>

        </div>
    )
}

export default StoryItems;