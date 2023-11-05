import React from 'react'
import "./styles/headerstyle.css";
function Header() {
  return (
    <header>
        <div className="container">
          <h1>湯るっとモンスター</h1>
          <nav>
            <a href="/">ホーム</a>
            <a href="/chara">温泉について</a>
            <a href="/chatbot">チャットボット</a>
            <a href="/login">ログイン</a>
          </nav>
        </div>
      </header>
  )
}

export default Header