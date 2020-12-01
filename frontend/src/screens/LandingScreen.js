import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'

const LandingScreen = () => {
  return (
    <div className="landingimage">
     <Image src='../images/landing.jpg'/>
     <div className="landingtext">ANDYBELLIMAGES</div>
     <Link className='button ' to='/home'>ENTER</Link>
    </div>
  )
}

export default LandingScreen
