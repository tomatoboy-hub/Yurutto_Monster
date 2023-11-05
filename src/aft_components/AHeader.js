import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
function AHeader() {
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.signOut();
        navigate('/login');
    }
  return (

    <header>
        <div className="container">
          <h1>湯るっとモンスター</h1>
          <nav>
            <a href="/">ホーム</a>
            <a href="/chara">キャラ図鑑</a>
            <a href="/chatbot">チャットボット</a>
            <a href="/login" onClick={handleLogout}>ログアウト</a>
            <a href="/user">ユーザー</a>
          </nav>
        </div>
      </header>
  )
}

export default AHeader