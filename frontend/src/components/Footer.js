import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'


const Footer = () => {
  return (
    <footer>
      <Container> 
        <Row>
          <Col className='footer'>
            Copyright &copy; ANDYBELLIMAGES
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
