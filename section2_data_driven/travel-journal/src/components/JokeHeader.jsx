export default function JokeHeader () {
    
    const tags = ["social","eco","tech"]
    // console.log(tags)
    // const tagsUi = [<h4>social</h4>,<h4>eco</h4>,<h4>tech</h4>]
    // incorrect: const tagsElement = tags.map( tag => `<h4>${tag}</h4>`) (render but not nice)
    // correct: const tagsElement = tags.map( tag => <h4>${tag}</h4>)

    // cannot render array of object directly
    // const topics = [ { topic: "US Daily"} ]
    // console.log(topics)

    const topics =  { topic: "US Daily"} 

    const title = <h2>Joke of The Day</h2>
    // console.log(title)

    return (
        <>            
            {title}
            {/* Runable but not nice <p>Tags: {tags}</p> */}
            {/* <p>{tagsUi}</p> */}
            <p><strong>Tags:</strong> {tags.map(tag => <span key={tag}>{tag} | </span>)}</p> 
            <p><strong>Today Hot Topics:</strong> {topics.topic}</p>
            <hr/>
        </>
    )
}