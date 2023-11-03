import React from 'react'
import Hero from '../CommonComponents/Hero'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'
import '../../Stylings/About.css'

function About() {
  return (
    <div>
      <Header />
      <Hero />

      <div className="about-us">
        <h2>We Care!</h2>
        <div className="paragraphs">
          <p>Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.</p>

          <p>Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.</p>
        </div>

        <div className="values-section">
          <>
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png" alt="holistic solutions" />

          <h3>Holistic solutions</h3>
          <p>We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
          </>

          <>
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png" alt='impact'/>

          <h3>Impact</h3>
          <p>Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
          </>
          
          <>
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png" alt='Open data'/>
          
          <h3>Open data</h3>
          <p>Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
          </>
        </div>


      </div>



      <Footer />
    </div>
  )
}

export default About