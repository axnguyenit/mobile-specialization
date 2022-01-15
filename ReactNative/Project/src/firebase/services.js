import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './services';

const centreDetails = {
  summary: 'summary',
  information: 'information',
  hours: 'hours',
  services: 'services',
  features: 'features',
  rating: 'rating',
  marketing: 'marketing',
};
