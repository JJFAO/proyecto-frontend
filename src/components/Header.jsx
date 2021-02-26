import { Nav, Navbar } from 'react-bootstrap';


export default function Header({setScreen}) {
  return (
  
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setScreen('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setScreen('Register')}>Registro</Nav.Link>
            <Nav.Link onClick={() => setScreen('Login')}>Login</Nav.Link>
          </Nav>
        </Navbar>
      
  )
}
