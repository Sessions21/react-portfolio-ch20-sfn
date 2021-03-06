import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
            <div className="social">
              <a href="https://github.com/Sessions21"><i className="icon ion-social-github"></i></a>
              <a href="https://www.facebook.com/scott.nichols.714/"><i className="icon ion-social-facebook"></i></a>
              <a href="https://www.linkedin.com/in/scott-nichols-58b70b6b/"><i className="icon ion-social-linkedin"></i></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/projects">Projects</a></li>
                <li className="list-inline-item"><a href="/resume">Resume</a></li>
                <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer