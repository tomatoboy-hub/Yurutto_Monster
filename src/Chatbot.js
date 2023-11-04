import './chatbot.css';
import {useState} from "react";
import chara from "./images/chara.jpeg";

function Chatbot() {
  const [changeChat, setChangeChat] = useState({message: "改正湯にようこそ！！！"});

  function Fare() {
    setChangeChat({
      message: "大人：500円\n中人：200円\n小人：100円"
    });
  }

  function Spring() {
    setChangeChat({message: "昭和4年の創業以来、\n大田区浦田の地にしっかりと根付き、\n『魚屋のいるお風呂屋さん』として長年親しまれています。\n当店オリジナルの黒湯炭酸泉、エリアでもトップクラスの濃さが自慢の黒湯天然温泉、シルク湯、\n銭湯では珍しい毛染めブースなど\n最新の設備を導入した伝統のある湯"});
  }

  function Facility() {
    setChangeChat({message: "・黒湯天然温泉\n・炭酸泉＋黒湯天然温泉\n・白湯\n・毛染めスペース"});
  }

  function Access() {
    setChangeChat({message: "浦田駅から徒歩10分"});
  }

  return (
    <div>
      <img src={chara}/><br/>
      <p className="reply"><div className="content">{changeChat.message}</div></p>
      <button className="fare-button" onClick={Fare}>料金</button>
      <button className="spring-button" onClick={Spring}>温泉について</button>
      <button className="facility-button" onClick={Facility}>設備</button>
      <button className="access-button" onClick={Access}>アクセス</button>
    </div>
  );
}

export default Chatbot
