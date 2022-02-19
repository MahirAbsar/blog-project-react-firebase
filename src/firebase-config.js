// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrPTJqOzriwRLt5uAfkAj9eqb9UbbG38c',
  authDomain: 'blogproject-f262f.firebaseapp.com',
  projectId: 'blogproject-f262f',
  storageBucket: 'blogproject-f262f.appspot.com',
  messagingSenderId: '1041314970464',
  appId: '1:1041314970464:web:81ef7d48266a74af42fc05',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
