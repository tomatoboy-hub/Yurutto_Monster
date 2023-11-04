import React, { useState } from 'react';

function CountEx() {
  // 数値を管理するためのstateを定義します。
  const [number, setNumber] = useState('');

  // 入力が変更されたときに呼ばれるハンドラー関数です。
  const handleChange = (event) => {
    // 入力された値が数値のみかチェックし、数値のみの場合にstateを更新します。
    const value = event.target.value;
    if (!isNaN(value)) {
      setNumber(value);
    }
  };

  return (
    <div>
      <input
        type="text" // 入力タイプをテキストにしていますが、numberにすることも可能です。
        value={number} // inputの値としてstateをバインドします。
        onChange={handleChange} // 値が変わるたびにhandleChangeを呼び出します。
      />
      <p>入力された数値: {number}</p> {/* 画面に現在のstateを表示します。 */}
    </div>
  );
}

export default CountEx;
