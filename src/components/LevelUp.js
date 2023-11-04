import React, { useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc,query,collection,where,getDocs } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';

const LevelUp = ({ url,setUrl }) => {
  const { user } = useAuthContext();

  useEffect(() => {

    const fetchCharacterData = async () => {
        if (user && url) {
          try {
            console.log("fetchCharacterData");
            // URLに基づいてキャラクター情報を取得
            const urlQuery = query(collection(db, "character"), where("url", "==", url));
            
            const querySnapshot = await getDocs(urlQuery);
            console.log("querySnapshot",querySnapshot)
            // 対応するキャラクターの経験値を更新
            querySnapshot.forEach(async (docu) => {
              const charData = docu.data()
              const usercharDocRef = doc(db, "users", user.uid, "characters", charData.char);
              const usercharDocSnap = await getDoc(usercharDocRef);

              if (usercharDocSnap.exists()) {
                console.log("usercharDocSnap",usercharDocSnap)
                const usercharData = usercharDocSnap.data();
                if (!usercharData.isOwned){
                    await updateDoc(usercharDocRef, { isOwned: true });

                } else {
                    await updateDoc(usercharDocRef, {
                    experience: (usercharData.experience) + 50
                })

                if ((usercharData.experience || 0) + 50 > charData.maxexp) {
                  await updateDoc(usercharDocRef, {
                    level: (usercharData.level || 0) + 1,
                    experience: 0
                  });

                }
                if ((usercharData.level || 0) + 1 >= 2) {
                    const userDocRef = doc(db, "users", user.uid);
                    await updateDoc(userDocRef, {
                        nowimg:charData.evolve
                      });
                }
            };
              }
            });
          } catch (error) {
            console.error("Error fetching character data:", error);
          }
        }
      };
    
      fetchCharacterData();
  }, [url, user]);

  return (
    <div>
      {/* ここにUIを表示する内容を記述 */}
    </div>
  );
}

export default LevelUp;





