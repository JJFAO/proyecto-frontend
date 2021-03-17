import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import FormMeme from './pages/FormMeme';
import Profile from './pages/Profile';
import axios from 'axios';

function App() {
    // const [screen, setScreen] = useState('Home');
    const [token, setToken] = useState(localStorage.getItem('token'));
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

    return (
        <div className="App">
            {/* <Header token={token} setScreen={setScreen} />
            {screen === 'Home' && <div>Home</div>}
            {screen === 'Login' && <Login setScreen={setScreen} setToken={setToken} />}
            {screen === 'Register' && <Register setScreen={setScreen} setToken={setToken} />} */}
            <Router>
                <Switch>
                    <Route path="/profile">
                        <Profile user={user} token={token} />
                    </Route>
                    <Route path="/formMeme">
                        <FormMeme user={user} token={token} />
                    </Route>
                    <Route path="/login">
                        <Login setToken={setToken} />
                    </Route>
                    <Route path="/register">
                        <Register setToken={setToken} />
                    </Route>
                    <Route path="/">
                        <Home user={user} token={token} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
