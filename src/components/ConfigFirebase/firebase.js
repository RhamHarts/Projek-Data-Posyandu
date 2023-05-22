import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_cG4GEYf1ZBGPxmUMfCgwJmRt5pOTVLA",
  authDomain: "crud-react-native-8c646.firebaseapp.com",
  databaseURL:
    "https://crud-react-native-8c646-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-react-native-8c646",
  storageBucket: "crud-react-native-8c646.appspot.com",
  messagingSenderId: "1020006557957",
  appId: "1:1020006557957:web:7339ff66a4d9a3bcea2f6c",
  measurementId: "G-LN6LXMW7LE",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

async function getData() {
  const users = collection(firestore, "users");
  const usersSnapshot = await getDocs(users);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());
  return usersList;
}

async function getSingleData(docId) {
  const userRef = doc(firestore, "users", docId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const userData = userSnap.data();
    return userData;
  } else {
    return null;
  }
}

export {
  auth,
  firestore,
  getData,
  collection,
  getDocs,
  doc,
  getSingleData,
  getDoc,
};
