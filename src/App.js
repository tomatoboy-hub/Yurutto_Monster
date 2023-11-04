
import Chatbot from './Chatbot';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import {Routes ,Route} from 'react-router-dom';
import QrCodeReader from './QrCodeReader';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <QrCodeReader />
    </div>
    </AuthProvider>
  );
}

export default App;
