export default function Joke(props) {
    // {props.comments && console.log(props.comments)}
    
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p> }
            <p className="punchline">Punchline: {props.punchline} </p>
            {props.upvotes && <p className="upvotes">Upvotes: {props.upvotes}</p>}
            {props.isPun && <p className="is-pun">This is a Pun!</p>}
            <hr/>
        </>
    )
}