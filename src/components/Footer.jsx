import React from 'react'
import '../assets/css/style.css';
import nasaLogo from '../assets/icons/nasa-logo.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <img id="foot-nasa-logo" src={nasaLogo} alt="nasa-logo" />
        <p>Stay up to date, follow NASA's Technology Transfer Program on</p>
        <p id="contact">Contact</p>
        <p>E-mail : hello@nasa.com | Hotline: +1 131 138 138</p>
        <hr />
        <p>NASA - &copy; 2022. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  )
}

export default Footer