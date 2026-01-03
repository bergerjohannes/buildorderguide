import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Log Firebase configuration for debugging
console.log('Firebase Config:', {
  apiKey: firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : 'missing',
  authDomain: firebaseConfig.authDomain || 'missing',
  projectId: firebaseConfig.projectId || 'missing',
  storageBucket: firebaseConfig.storageBucket || 'missing',
});

let app: FirebaseApp;
let auth: Auth;
let store: Firestore;
let storage: FirebaseStorage;

try {
  console.log('Initializing Firebase...');
  app = initializeApp(firebaseConfig);
  console.log('Firebase app initialized successfully');

  auth = getAuth(app);
  console.log('Firebase Auth initialized successfully');

  store = getFirestore(app);
  console.log('Firestore initialized successfully');

  storage = getStorage(app);
  console.log('Firebase Storage initialized successfully');
} catch (error) {
  console.error('Firebase initialization failed:', error);
  throw error;
}

export { auth, store, storage };
export default app;
