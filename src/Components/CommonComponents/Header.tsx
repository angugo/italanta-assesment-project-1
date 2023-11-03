import React from 'react'
import { Link } from 'react-router-dom';
import menuItems from '../Props/HeaderMenuItems'
import logo from '../../assets/images/logo.svg'
import '../../Stylings/Header.css'

function Header() {
  return (
    <>
    <div className='header' >

     {/* container for the logo */}
      <div id='logo'>
        <img src={logo} alt='logo' />
      </div>

      {/* container for all the menu items in the nav header */}
      <div className="menu-items">
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link className={menuItem.cName} to={menuItem.url}>
                {menuItem.title}
              </Link>
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