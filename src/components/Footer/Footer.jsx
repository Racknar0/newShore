import React from 'react'
import './Footer.css'

import twitter from '../../assets/img/twitterpng.png'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__SocialContainer'>
            <p className='footer__text'>Follow us</p>
            <div className='footer__logosContainer'>
                <img src={facebook} alt='facebook' className='footer__logo'/>
                <img src={twitter} alt='twitter' className='footer__logo'/>
                <img src={instagram} alt='instagram' className='footer__logo'/>
            </div>
        </div>
        <div className='footer__infoContainer'>
            <div className='footer__info' >
                <p className='footer__titleInfo'>About Us</p>
                <p className='footer__info1'>we want to help passengers to reach their detinations</p>
            </div>
            <div className='footer__info'>
                <p className='footer__titleInfo'>Explore</p>
                <p className='footer__infoText'>Home</p>
                <p className='footer__infoText'>Destination</p>
                <p className='footer__infoText'>About</p>
            </div>
            <div className='footer__info'>
                <p className='footer__titleInfo'>Information</p>
                <p className='footer__infoText'>More search</p>
                <p className='footer__infoText'>Blog</p>
                <p className='footer__infoText'>Testimonials</p>
            </div>
            <div className='footer__info'>
                <p className='footer__titleInfo'>Services</p>
                <p className='footer__infoText'>Mange my Bookings</p>
                <p className='footer__infoText'>Chekin</p>
                <p className='footer__infoText'>Hotel</p>
                <p className='footer__infoText'>Cars</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
