import { useState } from "react"

export default function Ternary() {
    
    const [isGoingOut, setIsGoingOut] = useState(true)
    // also correct: 
    // function handleClick(){
    //     setIsGoingOut(previsGoingOut => !previsGoingOut)
    // }        
    return (
        <div className="ternary">
            <h3 className="title">Do I feel like going out tonight?</h3>
            <button className="value" 
            onClick={() => setIsGoingOut(!isGoingOut)}
            aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </div>
    )
}