import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHHYx2f6d0ZeCZ4I9Xa2t4XUCCstWebS4",
    authDomain: "walmart-clone-97674.firebaseapp.com",
    projectId: "walmart-clone-97674",
    storageBucket: "walmart-clone-97674.appspot.com",
    messagingSenderId: "274550923465",
    appId: "1:274550923465:web:73f92c7f53e532ba096d18",
    measurementId: "G-CFGEK8QK2V"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };