import React from 'react'
import {useDispatch, useSelector} from  'react-redux';
import {LinkContainer} from 'react-router-bootstrap'
import {NavDropdown, } from 'react-bootstrap'
import {logout} from '../actions/userActions'


const SideNav = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

const logoutHandler = () => {
  dispatch(logout())
}


  return (
    <div className="sidenav">
    <a href="/home">home</a>
    <a href="/photographs">photographs</a>
    <a href="/contact">contact</a>
    
    {userInfo ? (
      <NavDropdown title={userInfo.name} id='username'>
       
        <LinkContainer to="/productlist"> 
        <NavDropdown.Item>Images</NavDropdown.Item >
        </LinkContainer>
        <NavDropdown.Item onClick={logoutHandler}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    ) : <a href="/login">login</a> }

  </div>
  )
}

export default SideNav
