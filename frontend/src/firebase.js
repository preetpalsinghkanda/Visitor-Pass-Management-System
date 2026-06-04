import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQ56N7deLAZ1T0q8SHrDcqzSPiRQaiY7A",
  authDomain: "vistra-a8edc.firebaseapp.com",
  projectId: "vistra-a8edc",
  storageBucket: "vistra-a8edc.firebasestorage.app",
  messagingSenderId: "338497893918",
  appId: "1:338497893918:web:4f530101b93264183be00f",
  measurementId: "G-2XLYYWN5SJ"
};


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);