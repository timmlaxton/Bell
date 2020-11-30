import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <LinkContainer to='/homescreen'> 
    <div> 
    <h1 className='toplogo' >ANDYBELL</h1>
      <h1 className='bottomlogo'>IMAGES</h1>
      </div>
      </LinkContainer>
  )
}

export default Header
