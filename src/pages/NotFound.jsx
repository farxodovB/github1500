import React from 'react'
import {Link} from 'react-router-dom'
import error from '../images/error.png'

function NotFound() {
  return (
    <div className="error">
        <img 
            src={error}
            alt="error" 
            className="error__img" 
        />
        <h3 className="error__title">This page doestn't exist</h3>
        <p className="error__text">Do you want to <Link to="/">Home Page</Link></p>
    </div>
  )
}

export default NotFound