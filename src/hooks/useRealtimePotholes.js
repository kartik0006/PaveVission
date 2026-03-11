import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

function useRealtimePotholes() {

  const [potholes, setPotholes] = useState([]);

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "potholes"),
      (snapshot) => {

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setPotholes(data);
      }
    );

    return () => unsubscribe();

  }, []);

  return potholes;
}

export default useRealtimePotholes;