import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  const fullYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <FaGithub />
      <p className="footer__text">Copyrights &copy; {fullYear} All rights</p>
    </footer>
  )
}

export default Footer