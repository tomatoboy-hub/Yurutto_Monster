import Monster from './Monster.js';
import chara1 from "./images/chara1.jpeg";
import chara2 from "./images/chara2.png";
import chara3 from "./images/chara3.jpeg";
import './charalist.css';


function Chatlist() {
    const monsters = [{name: "トゲもん", spring: "改正湯", image: chara1, level: 20},{name: "コケもん", spring: "照の湯",image: chara2, level: 2},{name: "カナもん", spring: "はすぬま温泉",image: chara3, level: 10}];
    return (
        <div>
          <h1>あなたが持っている湯るっとモンスター</h1>
          <ul className='list'>
          {monsters.map((monster, index) => (<Monster key={index} {...monster} />))}
          </ul>
        </div>
      );
    };

export default Chatlist
