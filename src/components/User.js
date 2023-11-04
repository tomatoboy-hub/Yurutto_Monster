import React,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase'; 
import AHeader from '../aft_components/AHeader';
import { db } from '../firebase';
import { doc, getDoc, updateDoc,query,collection,where,getDocs } from 'firebase/firestore';
function User() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [userData, setUserData] = useState(null);
    const [characterData, setCharacterData] = useState(null);
    // ユーザーデータを非同期で取得するための副作用フック
    useEffect(() => {
        if (!user) {
            navigate('/login', { replace: true });
            return;
        }

        const fetchUserData = async () => {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);
            console.log("userDocSnap",userDocSnap)
            if (userDocSnap.exists()) {
                const data = userDocSnap.data();
                setUserData(data);
                console.log("data",data)
                if (data.nowchara) {
                    // キャラクター情報を取得
                    const charDocRef = doc(db, "users", user.uid, "characters", data.nowchara);
                    const charDocSnap = await getDoc(charDocRef);

                    if (charDocSnap.exists()) {
                        setCharacterData(charDocSnap.data());
                        console.log(characterData );
                    } else {
                        console.error('Character data not found');
                    }
                }
            } else {
                console.error('User data not found');
            }
        };

        fetchUserData().catch(console.error);
    }, [user, navigate]);

    const handleLogout = () => {
        auth.signOut();
        navigate('/login');
    }
    if (!user){
        navigate('/login',{replace:true});
        return null;
    } else {
        console.log(userData);
        console.log(characterData);
        return (
            <div>
            <AHeader />
            {userData && (
                <img src={userData.nowimg} alt="キャラクター" width="200" height="200" />
            )}
            <h1>{characterData ? `Level: ${characterData.level}` : 'Loading character data...'}</h1>
            <h1>{characterData ? `experience: ${characterData.experience}`:'Loading exp data...'}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
          )
    }
  
}

export default User