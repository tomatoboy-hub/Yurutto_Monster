import React from 'react';
import Chara from './Chara';
import './charaListstyle.css'; // スタイリング用のCSSをインポート
import AHeader from './AHeader';

const CharaList = ({ charas }) => {
  return (
    <>
    <AHeader/>
    <div className="chara-list">
      
      {charas.map((chara, index) => (
        <Chara key={index} {...chara} />
      ))}
    </div>
    </>
  );
};

export default CharaList;