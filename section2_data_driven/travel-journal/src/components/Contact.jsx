function Contact(props) {
    return (
        <article className="contact-card">
            <img 
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img 
                    src="/src/assets/phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{props.tel}</p>
            </div>
            <div className="info-group">
                <img 
                    src="/src/assets/mail-icon.png" 
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
            
    )
}

export default Contact