import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header({ token }) {
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
            <Nav className="mr-auto"></Nav>
            {!token && (
                <Link to="/login">
                    <Button size="sm" className="mr-3">Login</Button>
                </Link>
            )}
            {!token && (
                <Link to="/register">
                    <Button variant="info" size="sm">Registro</Button>
                </Link>
            )}
            <p className="text-white text-uppercase font-weight-bold m-2 px-2">{user.nombre}</p>
            {token && (
                <Button onClick={handleLogOut} size="sm" variant="outline-danger">
                    Cerrar sesión
                </Button>
            )}
        </Navbar>
    );
}
