// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCadCCNeQ4Cy1ol4wEBxuuWoiesee3zJro",
  authDomain: "react-dragon-news-3.firebaseapp.com",
  projectId: "react-dragon-news-3",
  storageBucket: "react-dragon-news-3.appspot.com",
  messagingSenderId: "821303560803",
  appId: "1:821303560803:web:74d3a07e7a60a0e16e4656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;