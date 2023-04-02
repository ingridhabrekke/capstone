// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC5XRTQ1MLB3Y9XUq8Tz_ORSvvkzg92lBM",
	authDomain: "capstone-graveyard0.firebaseapp.com",
	databaseURL: "https://capstone-graveyard0-default-rtdb.firebaseio.com",
	projectId: "capstone-graveyard0",
	storageBucket: "capstone-graveyard0.appspot.com",
	messagingSenderId: "484310832722",
	appId: "1:484310832722:web:75b2ad9e1988061ca5718b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);