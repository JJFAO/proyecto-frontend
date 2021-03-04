import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


export default function Header({ setScreen, token }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (token) {
      getApi();
    }
  }, [token]);

  const getApi = async () => {
    try {
      const headers = { 'x-auth-token': token };
      const { data } = await axios.get('http://localhost:4000/api/usuarios/usuarioLogueado', { headers });
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }


  return (

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => setScreen('Home')}>Home</Nav.Link>
        {!token && <Nav.Link onClick={() => setScreen('Register')}>Registro</Nav.Link>}
        {!token && <Nav.Link onClick={() => setScreen('Login')}>Login</Nav.Link>}
        <Nav.Link className="ml-auto">{user.nombre}</Nav.Link>
      </Nav>
    </Navbar>

  )
}
