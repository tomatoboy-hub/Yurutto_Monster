// Monster.js
import React from 'react';

const Chara = ({ image, name, bathhouse }) => {
  return (
    <div className="chara">
      <img src={image} alt={name} />
      <div className="chara-info">
        <h3>{name}</h3>
        <p>{bathhouse}</p>
      </div>
    </div>
  );
};

export default Chara;
