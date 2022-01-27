import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

function useFireStore(collect, centreId) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const q = centreId
      ? query(collection(db, collect), where('centreId', '==', centreId))
      : query(collection(db, collect));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(data);
    });
    return unsubscribe;
  }, [collect, centreId]);

  return documents;
}

export default useFireStore;
