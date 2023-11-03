import React from 'react'
import footerItems, { FooterMenuItems } from '../Props/FooterMenuItems'
import '../../Stylings/Footer.css'

function Footer() {
  return (
    <div className='footer'>

      {footerItems.map((item: FooterMenuItems, index: number) => (
        <div key={index} className='menu-column'>

           {/* displays the headers of each object in the footerItems array */}
          <h3>{item.title}</h3>
          <ul>
            {/* arranges the content arrays in a list order under the headers on the dom */}
            {item.content.map((content: FooterMenuItems, contentIndex: FooterMenuItems) => (
              <li key={contentIndex}>{content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Footer