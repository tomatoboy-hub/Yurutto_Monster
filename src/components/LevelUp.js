import React, { useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc,query,collection,where,getDocs } from 'firebase/firestore';
import { useAuthContext } from '../context/AuthContext';

const LevelUp = ({ url,setUrl }) => {
  const { user } = useAuthContext();

  useEffect(() => {
    console.log("useEffect called with URL:", url); // URLをログに出力
    console.log("Current user:", user); // 現在のユーザーをログに出力
    const fetchCharacterData = async () => {
        if (user && url) {
          try {
            // URLに基づいてキャラクター情報を取得
            const urlQuery = query(collection(db, "character"), where("url", "==", url));
            console.log(urlQuery)
            const querySnapshot = await getDocs(urlQuery);
            
            console.log("22222222")
            // 対応するキャラクターの経験値を更新
            querySnapshot.forEach(async (docu) => {
                console.log("33333")
                console.log(docu)
                console.log("44444")
              const charData = docu.data()
              console.log(charData)
              const usercharDocRef = doc(db, "users", user.uid, "characters", charData.char);
              const usercharDocSnap = await getDoc(usercharDocRef);

              if (usercharDocSnap.exists()) {
                const usercharData = usercharDocSnap.data();
                if (!usercharData.isOwned){
                    await updateDoc(usercharDocRef, { isOwned: true });
                    console.log("444444")
                } else {
                await updateDoc(usercharDocRef, {
                  experience: (usercharData.experience) + 50
                })
                console.log("555555")
                if ((usercharData.experience || 0) + 50 > charData.maxexp) {
                  await updateDoc(usercharDocRef, {
                    level: (usercharData.level || 0) + 1,
                    experience: 0
                  });
                  console.log("666666")
                }
                if ((usercharData.level || 0) + 1 >= 2) {
                    const userDocRef = doc(db, "users", user.uid);
                    await updateDoc(userDocRef, {
                        nowimg:charData.evolve
                      });
                }
                console.log("777777")
                


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





