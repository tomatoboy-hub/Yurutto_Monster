import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';

import { AuthProvider } from './context/AuthContext';
import {Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
