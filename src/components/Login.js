import React from 'react'
import { auth ,provider,db} from '../firebase';
import { Link,useNavigate } from 'react-router-dom';    
import { useState } from 'react';
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { doc, setDoc  } from 'firebase/firestore';

function Login() {
    const navigate = useNavigate(); 
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
      try {
        const result = await signInWithPopup(auth,provider);
        const user = result.user;
        const userRef = doc(db, 'users', user.uid);
        await setDoc(userRef,{
          uid:user.uid,
          email:user.email,
          name:user.displayName,
          photoUrl:user.photoURL,
        },{merge:true})

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