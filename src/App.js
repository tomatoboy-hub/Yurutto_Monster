
import Chatbot from './Chatbot';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import {Routes ,Route} from 'react-router-dom';

import Reader from './components/QRead';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Reader/>
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
