import React from 'react'

const Slide = (props) => (
    <section id="slide" className="tiles">
        <article style={{backgroundImage: `url(${props.image})`}}>
            <header className="major">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </header>
            <a href={props.link} className="link primary"></a>
        </article>
    </section>
)

export default Slide
