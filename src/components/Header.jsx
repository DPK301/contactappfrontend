import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><b>CONNECT</b></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header