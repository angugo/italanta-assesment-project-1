import React from 'react'
import footerItems, { FooterMenuItems } from '../Props/FooterMenuItems'
import '../../Stylings/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      {footerItems.map((item: FooterMenuItems, index: number) => (
        <div key={index} className='menu-column'>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Footer