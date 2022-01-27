import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { db } from './config';

const centreDetails = {
  summary: 'summary',
  information: 'information',
  hours: 'hours',
  services: 'services',
  features: 'features',
  ratings: 'ratings',
  marketing: 'marketing',
};

const centresStore = {
  addDoc: async (collect, data) => {
    await addDoc(collection(db, collect), data);
  },

  getDoc: async (collect, id) => {
    const docSnap = await getDoc(doc(db, collect, id));
    return { ...docSnap.data(), id: docSnap.id };
  },

  getDocs: async (collect) => {
    const querySnapshot = await getDocs(collection(db, collect));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  },

  updateDoc: async (collect, id, data) => {
    await updateDoc(doc(db, collect, id), data);
  },

  getLatestCollection: async (cellect) => {
    const q = query(
      collection(db, cellect),
      orderBy('createdAt', 'desc'),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return data[0];
  },
};

export { centreDetails, centresStore };
