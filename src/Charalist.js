import Monster from './Monster.js';
import chara1 from "./images/chara1.jpeg";
import chara2 from "./images/chara2.jpeg";
import chara3 from "./images/chara3.png";
import './charalist.css';


function Chatlist() {
    const monsters = [{name: "トゲもん",image: chara1, Level: 20},{name: "コケもん",image: chara2, Level: 2},{name: "カナもん",image: chara3, Level: 2}];
    return (
        <div>
          <h1>あなたが持っているモンスター</h1>
          <ul className='list'>
          {monsters.map((monster, index) => (<Monster key={index} {...monster} />))}
          </ul>
        </div>
      );
    };

export default Chatlist
