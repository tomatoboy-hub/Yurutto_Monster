import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase'; 
import AHeader from '../aft_components/AHeader';
function User() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const handleLogout = () => {
        auth.signOut();
        navigate('/login');
    }
    if (!user){
        navigate('/login',{replace:true});
        return null;
    } else {
        return (
            <div>
                <AHeader/>
                <h1>ホームページ</h1>
                <button onClick={handleLogout}>ログアウト</button>
            </div>
          )
    }
  
}

export default User