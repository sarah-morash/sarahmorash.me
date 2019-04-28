import React from 'react'

const Slide = props => (
  <article style={{ backgroundImage: `url(${props.image})` }}>
    <header className="major">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.children}</p>
    </header>
    <a target="_blank" href={props.link} className="link primary" />
  </article>
)

export default Slide
