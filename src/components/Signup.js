import React from 'react'
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';    
import { useState } from 'react';

function Signup() {
    const navigate = useNavigate(); 
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            navigate('/user');
        } catch (error) {
            setError(error.message);

        }
    }
    return (
        <div>
            <h1>ユーザー登録</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>メールアドレス</label>
                    <input name="email" type="email" placeholder="email"/>
                </div>
                <div>
                    <label>パスワード</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                <div>
                    <button>登録</button>
                </div>
                <div>
                    ログインは<Link to={'/login'}>こちら</Link>から
                </div>

            </form>
        </div>
    )
}

export default Signup