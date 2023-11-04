import React from 'react'
import { auth ,provider,db} from '../firebase';
import { Link,useNavigate } from 'react-router-dom';    
import { useState } from 'react';
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { doc, setDoc,getDoc,collection,Firestore} from 'firebase/firestore';

async function initializeUserCharacters(user, db) {
  // ユーザードキュメントの参照を取得
  const userDocRef = doc(db, 'users', user.uid);

  // 各キャラクターの初期データと参照をユーザーのサブコレクションに保存
  const characterData = [
    { id: "char1", isOwned: true, experience: 0 },
    { id: "char2", isOwned: false, experience: 0 },
    // 他のキャラクターのデータも同様に追加...
  ];

  // 各キャラクターに対して処理
  for (const char of characterData) {
    // キャラクターの参照を作成
    const characterRef = doc(db, 'characters', char.id);

    // ユーザーのキャラクターサブコレクション内のドキュメント参照を取得
    const userCharacterRef = doc(collection(userDocRef, 'characters'), char.id);

    // ユーザードキュメントにキャラクター参照とその他の情報を保存
    await setDoc(userCharacterRef, {
      characterRef: characterRef,
      ...char
    });
  }
}

async function initializeUserOnLogin(user){
  
  const userDocRef = doc(db,'users',user.uid);
  const docSnap = await getDoc(userDocRef);

  if (!docSnap.exists()){
    await setDoc(userDocRef,{
      uid:user.uid,
      email:user.email,
      name:user.displayName,
      photoUrl:user.photoURL,
    },{merge:true});

    await initializeUserCharacters(user,db);

  }
}

function Login() {
    const navigate = useNavigate(); 
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
      try {
        const result = await signInWithPopup(auth,provider);
        const user = result.user;
        await initializeUserOnLogin(user);

        navigate('/user');
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try{
            await signInWithEmailAndPassword(auth, email.value, password.value);
            navigate('/user');    
        } catch (error){
            console.log(error);
            setError(error.message);
        }
    }
  return (
    <div>
      <header> 
      <div class="logo">
        <h3>湯るっとモンスター</h3>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a>
            </li><li><a href="/about">About</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/intern">Intern</a></li>
            </ul>
          </nav>
      </header>
      <h1>ログイン</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Googleログイン</button>
        
    </div>
  )
}

export default Login
