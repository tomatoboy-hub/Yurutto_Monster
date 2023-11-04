import React from 'react'
import "./styles/headerstyle.css";

// props を関数のパラメータとして追加します
function Header(props) {
  return (
    <header>
        <div className="container">
          {/* props.title を使って、渡されたタイトルを参照します */}
          <h1>{props.title}</h1>
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

export default Header;
