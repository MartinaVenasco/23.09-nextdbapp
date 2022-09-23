
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO2jGh-sxbzmhwDPsqfJQkvrleZx5G-t4",
  authDomain: "the-pulsar-332215.firebaseapp.com",
  projectId: "the-pulsar-332215",
  storageBucket: "the-pulsar-332215.appspot.com",
  messagingSenderId: "137761483183",
  appId: "1:137761483183:web:455bda58ca0c5c1786a75a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "nuova-raccolta"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
})
export { app, db, querySnapshot };