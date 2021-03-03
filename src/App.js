import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  const [screen, setScreen] = useState('Home');
  return (
    <div className="App">
      <Header setScreen={setScreen} />
      {screen === 'Home' && <div>Home</div>}
      {screen === 'Login' && <Login setScreen={setScreen} />}
      {screen === 'Register' && <Register />}
    </div>
  );
}

export default App;
