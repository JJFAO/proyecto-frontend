import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';

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
            const { data } = await axios.get('http://localhost:4000/api/usuarios/usuarioLogueado', {
                headers,
            });
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">MeMes</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => setScreen('Home')}>Home</Nav.Link>
                {!token && <Nav.Link onClick={() => setScreen('Register')}>Registro</Nav.Link>}
                {!token && <Nav.Link onClick={() => setScreen('Login')}>Login</Nav.Link>}
            </Nav>
            <p className="text-white text-uppercase font-weight-bold m-2 px-2">{user.nombre}</p>
            {token && (
                <Button onClick={handleLogOut} size="sm" variant="outline-danger">
                    Cerrar sesion
                </Button>
            )}
        </Navbar>
    );
}
