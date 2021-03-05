import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    const [screen, setScreen] = useState('Home');
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div className="App">
            <Header token={token} setScreen={setScreen} />
            {screen === 'Home' && <div>Home</div>}
            {screen === 'Login' && <Login setScreen={setScreen} setToken={setToken} />}
            {screen === 'Register' && <Register setScreen={setScreen} setToken={setToken} />}
        </div>
    );
}

export default App;
