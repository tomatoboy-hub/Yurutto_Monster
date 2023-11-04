import React from 'react'
import { auth ,provider} from '../firebase';
import { Link,useNavigate } from 'react-router-dom';    
import { useState } from 'react';
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";

function Login() {
    const navigate = useNavigate(); 
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
      try {
        await signInWithPopup(auth,provider);
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
      <h1>ログイン</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Googleログイン</button>
        
    </div>
  )
}

export default Login