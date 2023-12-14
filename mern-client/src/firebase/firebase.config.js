// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsOm2-xiVvZJuT6gYcS19_i8XS-00uNt0",
    authDomain: "audio-book-store-2ff3f.firebaseapp.com",
    projectId: "audio-book-store-2ff3f",
    storageBucket: "audio-book-store-2ff3f.appspot.com",
    messagingSenderId: "1035785181282",
    appId: "1:1035785181282:web:8edfd1df3e6123172c593b",
    measurementId: "G-R7T87LB9K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;