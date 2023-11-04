import React from 'react';
import Chara from './Chara';
import './styles/charaListstyle.css'; // スタイリング用のCSSをインポート

const CharaList = ({ charas }) => {
  return (
    <div className="chara-list">
      {charas.map((chara, index) => (
        <Chara key={index} {...chara} />
      ))}
    </div>
  );
};

export default CharaList;
