import { collection, getDocs, getDoc, addDoc, doc } from 'firebase/firestore';
import { db } from './config';

const centreDetails = {
  summary: 'summary',
  information: 'information',
  hours: 'hours',
  services: 'services',
  features: 'features',
  rating: 'rating',
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
};

export { centreDetails, centresStore };
