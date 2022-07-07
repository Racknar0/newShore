import React from 'react'
import './HeaderContent.css'


const HeaderContent = () => {
  return (
    <div className='headerContent'>
        <div className='headerContent__container'>
            <h1 className='headerContent__title'>Visit Canada with prices from $800</h1>
            <p className='headerContent__description'>Prepare your bags and forget your worries <br /> to start enjoying your holidays in this fantastic country</p>

            <button className='headerContent__button'>BUY NOW</button>
        </div>
    </div>
  )
}

export default HeaderContent
