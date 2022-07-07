import {useContext, useRef} from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../contexts/GobalContext'
import rowImg from '../../assets/img/arrow-down.svg'

import './Nav.css'

const Nav = () => {

  const arrow = useRef(null);
  const dropdown = useRef(null);
  const { language,setLanguage } = useContext(GlobalContext);


  /* FUNCTION TOGGLER DROPDOWN AND ROW */
  const rotate = () => {
    /* toggle className */
    arrow.current.classList.toggle('rotate');
    dropdown.current.classList.toggle('dropdown__hidden');
  }


  return (
    <nav className='nav'>
      <div className='nav__container'>
          <div className='nav__dropdown dropdown__hidden' ref={dropdown}>

              <p onClick={ () => {
                rotate();
                setLanguage('RU');
              }} className='nav__dropdownLink'>RU - Russian</p>

              <p onClick={ () => {
                rotate();
                setLanguage('DE');
              }} className='nav__dropdownLink'>DE - German</p>

              <p onClick={ () => {
                rotate();
                setLanguage('FR');
              }} className='nav__dropdownLink'>FR - French</p>

          </div>
          <p className='nav__brand'>AIRLINE</p>
          <div>
            <p className='nav__lang'>en</p>
            <img src={rowImg} onClick={rotate} ref={arrow} alt='row' className='nav__row rotate' />
          </div>

          <div>
              <ul className='nav__list'>
                  <li className='nav__item'> <Link className='nav__link nav__link--animation' to="/">Home</Link> </li>
                  <li className='nav__item'> <Link className='nav__link nav__link--animation' to="/about">About</Link> </li>
                  <li className='nav__item'> <Link className='nav__link nav__link--animation' to="/destination">Destination</Link> </li>
                  <li className='nav__item'> <Link className='nav__link nav__link--animation' to="/contact">Contact</Link> </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav
