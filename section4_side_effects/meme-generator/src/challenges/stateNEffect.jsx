import { useState } from "react"
import WindowTracker from "./WindowTracker"
import './stateNEffect.css'
export default function StateNEffect() {

    const [show,setShow] = useState(true)
    function toggle(){
        setShow(prev => !prev)
    }
    
    return (
        <main className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}