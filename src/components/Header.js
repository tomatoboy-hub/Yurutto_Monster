import React from 'react'
import "./styles/headerstyle.css";
function Header() {
  return (
    <header>
        <div className="container">
          <h1>湯るっとモンスター</h1>
          <nav>
            <a href="/">ホーム</a>
            <a href="/about">温泉について</a>
            <a href="/contact">お問い合わせ</a>
            <a href="/login">ログイン</a>
          </nav>
        </div>
      </header>
  )
}

export default Header