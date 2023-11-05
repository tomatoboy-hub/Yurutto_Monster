import CharaList from './aft_components/CharaList';
import Chatbot from './Chatbot';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import {Routes ,Route} from 'react-router-dom';
import mon1 from "./mons/mon1.png";
import mon2 from "./mons/mon2.png";
import mon3 from "./mons/mon3.png";
import mon4 from "./mons/mon4.png";
import mon5 from "./mons/mon5.png";
import mon6 from "./mons/mon6.png";
import mon7 from "./mons/mon7.png";
import mon8 from "./mons/mon8.png";
import mon9 from "./mons/mon9.png";
import monx from "./mons/q.png";
const charas = [
  { image: mon1, name: 'ココフロちゃん', bathhouse: 'COCOFURO' },
  { image: mon2, name: 'ココフーラさん', bathhouse: 'COCOFURO' },
  { image: mon3, name: 'ココフルさん', bathhouse: 'COCOFURO' },
  { image: mon4, name: 'ますたろう', bathhouse: 'ますの湯' },
  { image: mon5, name: 'ますやん', bathhouse: 'ますの湯' },
  { image: mon6, name: 'まっさん', bathhouse: 'ますの湯' },
  { image: mon7, name: 'くろゆくん', bathhouse: '改正湯' },
  { image: mon8, name: 'くろゆん', bathhouse: '改正湯' },
  { image: mon9, name: 'くろろん', bathhouse: '改正湯' },
  { image: monx, name: 'xxx', bathhouse: 'xxx' },
  { image: monx, name: 'xxx', bathhouse: 'xxx' },
  { image: monx, name: 'xxx', bathhouse: 'xxx' },
];

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/chara" element={<CharaList charas={charas} />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
