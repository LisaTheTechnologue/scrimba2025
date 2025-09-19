import React from "react"
import './UseState.css'

export default function UseState() {
    
    let test = "Yes"
    test = "Heck Yes"
    
    function changeBtn() {
        test = "No"
    }

    const result = React.useState("Yes")
    //console.log(result) // array with "Yes" and function f()

    let [isUseful,setIsUseful] = React.useState("Yes")
    // isUseful = "Heckyes"
    // func("new function")
    function handleClick(){
        setIsUseful("Definitely")
    }

    const [counter, setCounter] = React.useState(0)
    function handleDecrease(){
        setCounter(prevCount => prevCount-1)
    }
    function handleIncrease(){
        setCounter(prevCount => prevCount+1)
    }
    return (
        <main>
      
            <h3 className="title">Is the page useful to know?</h3>
            <div className="button-panel">
            <button onClick={changeBtn} className="value">{test}</button>
            <button className="value">{result[0]}</button>
            <button onClick={handleClick} className="value">{isUseful}</button>
            </div>               
      
            <h3>How many votes do you give for this page?</h3>
            <div className="counter">
                <button onClick={handleDecrease} className="minus" aria-label="Decrease count">–</button>
                <h4 className="count">{counter}</h4>
                <button onClick={handleIncrease} className="plus" aria-label="Increase count">+</button>
            </div>
       
        </main>
    )
}