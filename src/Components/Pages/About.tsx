import React from 'react'
import Hero from '../CommonComponents/Hero'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'
import aboutUsData, { AboutUsSection } from '../Props/AboutUsPageBodyData'
import '../../Stylings/About.css'

function About() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="about-us">
        {aboutUsData.map((section: AboutUsSection, index: number) => (
          <div key={index} className="section">
            <h2>{section.title}</h2>
            <div className="paragraphs">
              {section.paragraphs.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default About;