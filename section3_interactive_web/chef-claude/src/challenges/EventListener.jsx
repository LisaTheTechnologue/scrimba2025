export default function EventListener() {

    function handleClick() {
        console.log("Block")
    }
    return (
        <div className="challenge-event-listener">
            <img 
            src="https://picsum.photos/640/360"
            alt="Placeholder image from Picsum"
            onMouseOver={function() {console.log("Hover image")}}
            /> 
            <button onClick={handleClick}>Block click</button>
            <button onClick={function() {console.log("Inline")}}>Inline click</button>            
        </div>
    )
}