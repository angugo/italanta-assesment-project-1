import React from 'react'
import Hero from '../CommonComponents/Hero'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'

function About() {
  return (
    <div>
      <Header />
      <Hero />

      <div className="about-us">
        <h1>We Care!</h1>
        <div className="paragraphs">
          <p>Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.</p>

          <p>Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.</p>
        </div>


      </div>



      <Footer />
    </div>
  )
}

export default About