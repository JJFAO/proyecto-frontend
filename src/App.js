import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import FormMeme from './pages/FormMeme';
import Profile from './pages/Profile';

function App() {
    // const [screen, setScreen] = useState('Home');
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div className="App">
            {/* <Header token={token} setScreen={setScreen} />
            {screen === 'Home' && <div>Home</div>}
            {screen === 'Login' && <Login setScreen={setScreen} setToken={setToken} />}
            {screen === 'Register' && <Register setScreen={setScreen} setToken={setToken} />} */}
            <Router>
                <Switch>
                    <Route path="/profile">
                        <Profile token={token} />
                    </Route>
                    <Route path="/formMeme">
                        <FormMeme token={token} />
                    </Route>
                    <Route path="/login">
                        <Login setToken={setToken} />
                    </Route>
                    <Route path="/register">
                        <Register setToken={setToken} />
                    </Route>
                    <Route path="/">
                        <Home token={token} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
