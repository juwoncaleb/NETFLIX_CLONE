import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
 // seed the database

// we need to config here 
const config = {
    apiKey: "AIzaSyD9hYIm8NxwSAQd1poAjoqEmtvrvuRv3EU",
    authDomain: "netlix-5f327.firebaseapp.com",
    projectId: "netlix-5f327",
    storageBucket: "netlix-5f327.appspot.com",
    messagingSenderId: "283411844997",
    appId: "1:283411844997:web:2b7c5365ea681d3f713eec"
};
const firebase = Firebase.initializeApp(config);

export { firebase};