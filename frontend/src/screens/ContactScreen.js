import React from 'react'
import { Container } from 'react-bootstrap';
import SideNav from '../components/SideNav'
import Header from '../components/Header';

const ContactScreen = () => {
  return (
    <>
     <Header/>
    <SideNav />
    <Container> 
    <div>

      <h1 className="email">info@andbellimages.com</h1>
      <h1 className="phone">+44(0)7811843930</h1>
    
    
     <div>   
       <a href={"https://www.facebook.com/andybellimages/"}>
       <i className="fab fa-facebook-f" ></i>
       </a>
      </div> 
     <div>   
       <a href={"https://twitter.com/andybellimages?lang=en"}> 
      <i className="fab fa-twitter"></i>
      </a>
      </div> 
      <div>   
      <a href={"https://www.instagram.com/andybellimages/?hl=en"}> 
      <i className="fab fa-instagram"></i>
      </a>
      </div> 
      <div>  
      <a href={"https://uk.linkedin.com/in/andy-bell-a8124184"}>  
      <i className="fab fa-linkedin"></i>
      </a>
      </div> 
   
    </div>
    </Container>
    </>
  )
}

export default ContactScreen
