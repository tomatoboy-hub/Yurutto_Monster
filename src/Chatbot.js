import './chatbot.css';
import {useState} from "react";
import chara from "./images/chara.jpeg";

function Chatbot() {
  const [changeChat, setChangeChat] = useState({message: "温泉にようこそ"});

  function Fare() {
    setChangeChat({
      message: "大人:500円\n子供:100円"
    });
  }

  function Spring() {
    setChangeChat({message: "この温泉は・・・"});
  }

  function History() {
    setChangeChat({message: "歴史は・・・・・・・・・・・・・・・"});
  }

  function Access() {
    setChangeChat({message: "駅から徒歩10分"});
  }

  return (
    <div>
      <img src={chara}/><br/>
      <p className="reply"><div className="content">{changeChat.message}</div></p>
      <button className="fare-button" onClick={Fare}>料金</button>
      <button className="spring-button" onClick={Spring}>温泉について</button>
      <button className="history-button" onClick={History}>歴史</button>
      <button className="access-button" onClick={Access}>アクセス</button>
    </div>
  );
}

export default Chatbot
