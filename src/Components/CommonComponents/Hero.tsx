import React from 'react'
import { aboutPageHeroProps } from '../Props/AboutPageHeroProps'
import '../../Stylings/Hero.css'

function Hero() {
  return (

    <div className={aboutPageHeroProps.cName}>
        <img alt={aboutPageHeroProps.imgAlt} src={aboutPageHeroProps.heroImg} />

        <div className="hero-text">
            <h2>{aboutPageHeroProps.textOne}</h2>
            <h1>{aboutPageHeroProps.textTwo}</h1>
            <p>{aboutPageHeroProps.textThree}</p>
        </div>
    </div>
  )
}

export default Hero