import axios from 'axios';
import { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


export default function Header({setScreen}) {

  const token = localStorage.getItem('token');
  

  useEffect(() => {
    getApi();
  }, [])

  const getApi = async () => {
    try {
      const headers = {'x-auth-token': token}
      const { data } = await axios.get('http://localhost:4000/api/usuarios/usuarioLogueado', { headers });
        console.log(data)
    } catch (error) {
        console.log(error);
    }
  }


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
