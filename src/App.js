import CharaList from './components/yohei_chara/CharaList';
import Chatbot from './Chatbot';
import './App.css';
import Login from './components/Login';
import User from './components/User';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import {Routes ,Route} from 'react-router-dom';
import QrCodeReader from './QrCodeReader';
import mon1 from "./images/monster/mon1.png";
import mon2 from "./images/monster/mon2.png";
import mon3 from "./images/monster/mon3.png";
import mon4 from "./images/monster/mon4.png";
import mon5 from "./images/monster/mon5.png";
import mon6 from "./images/monster/mon6.png";
import mon7 from "./images/monster/mon7.png";
import mon8 from "./images/monster/mon8.png";
import mon9 from "./images/monster/mon9.png";
import monx from "./images/monster/q.png";
import Header from './components/Header';

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
      <Header title="湯るっとモンスター図鑑" />
      <CharaList charas={charas} />
    </div>
    </AuthProvider>
  );
}

export default App;
