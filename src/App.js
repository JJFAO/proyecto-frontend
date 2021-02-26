import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [screen, setScreen] = useState('Home');
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setScreen('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setScreen('Register')}>Registro</Nav.Link>
            <Nav.Link onClick={() => setScreen('Login')}>Login</Nav.Link>
          </Nav>
        </Navbar>
      </>
      {screen === 'Home' && <div>Home</div>}
      {screen === 'Login' && <div>Login</div>}
      {screen === 'Register' && <div>Registro</div>}
    </div>
  );
}

export default App;
