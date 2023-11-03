import React from 'react'
import { aboutPageHeroProps } from '../Props/AboutPageHeroProps'
import '../../Stylings/Hero.css'

function Hero() {
  return (

    <div className={aboutPageHeroProps.cName}>
        <img alt={aboutPageHeroProps.imgAlt} src={aboutPageHeroProps.heroImg} />

        <div className="hero-text">
            <h4>{aboutPageHeroProps.textOne}</h4>
            <h2>{aboutPageHeroProps.textTwo}</h2>
            <h3>{aboutPageHeroProps.textThree}</h3>
        </div>
    </div>
  )
}

export default Hero