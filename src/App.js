import { useState } from 'react';
import './App.css';

function App() {
  const [screen, setScreen] = useState('Home');
  return (
    <div className="App">
      
      {screen === 'Home' && <div>Home</div>}
      {screen === 'Login' && <div>Login</div>}
      {screen === 'Register' && <div>Registro</div>}
    </div>
  );
}

export default App;
