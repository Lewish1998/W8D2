// import { useEffect, useState } from "react"

const Articles = ({articles}) => {

    const articleee = articles.map((article) => {
      return <li>(article)</li>
    })



    return (
        <div>
            <h1>Article</h1>
            <ul>{articleee.by}</ul>
        </div>
    )
}

export default Articles
