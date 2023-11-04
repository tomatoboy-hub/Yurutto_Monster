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
import CouponPage from './components/yohei_coupon/CouponPage';
import CouponCard from './components/yohei_coupon/CouponCard';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header title="獲得クーポン一覧" />
      <CouponPage />
    </div>
    </AuthProvider>
  );
}

export default App;
