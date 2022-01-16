import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/config';

function useFireStore(collect, id) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (id) {
      unsubscribe = onSnapshot(doc(db, collect, id), (doc) => {
        const data = { ...doc.data(), id: doc.id };
        setDocuments(data);
      });
    } else {
      const q = query(collection(db, collect));
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDocuments(data);
      });
    }
    return unsubscribe;
  }, [collect, id]);

  return documents;
}

export default useFireStore;
