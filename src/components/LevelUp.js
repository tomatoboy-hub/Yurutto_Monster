import React, { useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';

const LevelUp = ({ url }) => {
  const { user } = useAuthContext();

  useEffect(() => {
    const checkUrl = async () => {
      if (user) {
        try {
          const charDocRef = doc(db, "url", "char1"); // "url" がコレクション名
          const charDocSnap = await getDoc(charDocRef);

          if (charDocSnap.exists()) {
            const charData = charDocSnap.data();
            if (charData.url === url) {
              const usercharDocRef = doc(db, "users", user.uid, "characters", charData.char);
              const usercharDocSnap = await getDoc(usercharDocRef);

              if (usercharDocSnap.exists()) {
                const usercharData = usercharDocSnap.data();

                await updateDoc(usercharDocRef, {
                  experience: (usercharData.experience || 0) + 50 // 経験値がない場合は0から始める
                });
              } 
            } 
          } 
        } catch (error) {
          console.error("Error fetching character data:", error);
        }
      }
    };

    checkUrl();
  }, [url, user]);

  return (
    <div>
      {/* ここにUIを表示する内容を記述 */}
    </div>
  );
}

export default LevelUp;





