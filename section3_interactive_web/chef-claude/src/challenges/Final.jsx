import { useState } from "react"
import padsData from "./pads"
import "./Final.css"
import Pad from "./Pad"


export default function Final() {
    
    const [pads, setPads] = useState(padsData)
    
    function toggle(id){
        setPads(prevPads => prevPads.map(pad => {
            return pad.id === id ? {...pad, on: !pad.on} : pad
        }))
    }

    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} pad={pad} 
        color={pad.color} on={pad.on} 
        key={pad.id} id={pad.id}/>
))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}