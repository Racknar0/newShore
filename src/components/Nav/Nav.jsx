import React from 'react'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
          <p className='nav__brand'>AIRLINE</p>

          <div>
              <ul className='nav__list'>
                  <li className='nav__item'> <a className='nav__link nav__link--animation' href="/">Home</a> </li>
                  <li className='nav__item'> <a className='nav__link nav__link--animation' href="/">About</a> </li>
                  <li className='nav__item'> <a className='nav__link nav__link--animation' href="/">Destination</a> </li>
                  <li className='nav__item'> <a className='nav__link nav__link--animation' href="/">Contact</a> </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav
