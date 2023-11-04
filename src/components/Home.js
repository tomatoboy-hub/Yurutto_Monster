import React from 'react'
import Header from './Header';
import "./styles/homestyle.css";
import { useAuthContext } from '../context/AuthContext';
import AHeader from '../aft_components/AHeader';
function Home() {
    const { user } = useAuthContext();

  return (
    <>
    {user ? <AHeader/>:<Header />}
      <section className="banner">
        <div className="container">
          <h1>心を癒す極上の温泉体験</h1>
          <p>自然に囲まれた静かな温泉で、日々の疲れを癒しましょう。</p>
        </div>
      </section>

      <main>
        <section className="welcome">
          <div className="container">
            <h2>ようこそ穏やか温泉郷へ</h2>
            <p>穏やか温泉郷への訪問者の皆様に最高のおもてなしと癒しの時間をご提供します。</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2023 穏やか温泉郷. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home