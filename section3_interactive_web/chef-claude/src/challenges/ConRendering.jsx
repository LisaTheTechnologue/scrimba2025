import { useState } from "react"
import './ConRendering.css'
import jokesData from './jokesData.js'

function Joke(props) {

    const [isShown,setIsShown] = useState(false)

    function toggleShown(){
        setIsShown(prev => !prev)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p> }
            <button onClick={toggleShown}> {isShown ? "Hide" : "Show"} punchline</button>
            <hr />

        </div>
    )
}

export default function ConRendering() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}