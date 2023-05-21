import React from 'react'

function About() {
  return (
    <div className="about">
      <div className="container about__container">
        <h1 className="about__title">Github Finder</h1>
        <h3 className="about__postTitle">This Web Application for Testing</h3>
        <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem at sit ex quam ad. Maiores similique hic debitis dolores ipsam delectus, magni, praesentium possimus pariatur officia, aliquid veritatis animi consequuntur?</p>
        <a href="tel:+9989991234567" className="about__link"><span>Contact: </span> +9989991234567</a>
        <a href="mailto:example@gmail.com" className="about__link"><span>Contact: </span> example@gmail.com</a>
      </div>
    </div>
  )
}

export default About