// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtvpGEYIhRV4oEBSFKk1tGsH1WTlv0tis",
  authDomain: "infocard-ae435.firebaseapp.com",
  projectId: "infocard-ae435",
  storageBucket: "infocard-ae435.appspot.com",
  messagingSenderId: "623953688178",
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
