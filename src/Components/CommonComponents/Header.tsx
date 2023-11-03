import React from 'react'
import menuItems, { MenuItem } from '../Props/MenuItems'
import '../../Stylings/Header.css'

function Header() {
  return (
    <>
    <div className='header' >

     {/* container for the logo */}
      <div id='logo'>
        <img src='' alt='logo' />
      </div>

      {/* container for all the menu items in the nav header */}
      <div className="menu-items">
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a className={menuItem.cName} href={menuItem.url}>
                {menuItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>

    <hr/>
    </>
  )
}

export default Header