import axios from 'axios';
import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function Header({ token, user }) {
    const history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
        window.location.reload();
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
                MeMes
            </Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            {!token && (
                <Link to="/login">
                    <Button size="sm" className="mr-3">
                        Login
                    </Button>
                </Link>
            )}
            {!token && (
                <Link to="/register">
                    <Button variant="info" size="sm">
                        Registro
                    </Button>
                </Link>
            )}
            <p className="text-white text-uppercase font-weight-bold m-2 px-2">{user.nombre}</p>
            {token && (
                <>
                    <Link to="/profile">Perfil</Link>
                    <Button as={Link} to="/formMeme" size="sm" variant="outline-danger">
                        Crear Meme
                    </Button>
                    <Button onClick={handleLogOut} size="sm" variant="outline-danger">
                        Cerrar sesión
                    </Button>
                </>
            )}
        </Navbar>
    );
}
