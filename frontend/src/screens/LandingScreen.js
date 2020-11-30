import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'react-bootstrap'

const LandingScreen = () => {
  return (
    <div className="landingimage">
     <Image src='../images/landing.jpg'/>
     <div className="landingtext">ANDYBELLIMAGES</div>
     <Link className='btn btn-light my-3' to='/homescreen'>ENTER</Link>
    </div>
  )
}

export default LandingScreen
