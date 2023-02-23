import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYxGOLXuyX3x-gqRkSUCYKtZYeHw7pZcQ",
  authDomain: "shopper-mapper-7e682.firebaseapp.com",
  databaseURL: "https://shopper-mapper-7e682-default-rtdb.firebaseio.com",
  projectId: "shopper-mapper-7e682",
  storageBucket: "shopper-mapper-7e682.appspot.com",
  messagingSenderId: "345937746858",
  appId: "1:345937746858:web:568423ed4bfb82052f29d3",
  measurementId: "G-KNYQ6N3F7N",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
