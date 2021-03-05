import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    const [screen, setScreen] = useState('Home');
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div className="App">
            {/* <Header token={token} setScreen={setScreen} />
            {screen === 'Home' && <div>Home</div>}
            {screen === 'Login' && <Login setScreen={setScreen} setToken={setToken} />}
            {screen === 'Register' && <Register setScreen={setScreen} setToken={setToken} />} */}
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
