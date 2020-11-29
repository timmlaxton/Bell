import React from 'react'
import {Image} from 'react-bootstrap'

const LandingScreen = () => {
  return (
    <div className="landingimage">
     <Image src='../images/landing.jpg'/>
     <div className="landingtext">ANDYBELLIMAGES</div>
     <button className="btn">Button</button>
    </div>
  )
}

export default LandingScreen
