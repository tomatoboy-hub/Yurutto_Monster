import React from 'react'
import "./styles/headerstyle.css";
function Header() {
  return (
    <header>
        <div className="container">
          <h1>湯るっとモンスター図鑑</h1>
          <nav>
            <a href="/">ホーム</a>
          </nav>
        </div>
    </header>
  )
}

export default Header