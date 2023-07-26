import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCkho-yN4ipQzYwM246l0kohGfwz21xo9E",
    authDomain: "unichat-app-60353.firebaseapp.com",
    projectId: "unichat-app-60353",
    storageBucket: "unichat-app-60353.appspot.com",
    messagingSenderId: "59715139790",
    appId: "1:59715139790:web:3a948d29d711174b51389f"
}).auth();