// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { productos } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4jde3w6vR7v-2crQnyJSJ21aruOplPyg",
  authDomain: "clothingstore-e32d3.firebaseapp.com",
  projectId: "clothingstore-e32d3",
  storageBucket: "clothingstore-e32d3.appspot.com",
  messagingSenderId: "332357840",
  appId: "1:332357840:web:adbe0cfbf558d5a7ea3ed5",
  measurementId: "G-1GHTTEFQ95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

/*productos.forEach((producto) => {
  addDoc(collection(db, "productos"), producto)
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
})*/