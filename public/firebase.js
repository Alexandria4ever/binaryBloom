// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM22aIXGhkuV1K6UVOe4DRIi3kDkSSn6o",
  authDomain: "binarybloom-7c450.firebaseapp.com",
  projectId: "binarybloom-7c450",
  storageBucket: "binarybloom-7c450.firebasestorage.app",
  messagingSenderId: "655041968048",
  appId: "1:655041968048:web:a92b86179521bf0a660875",
  measurementId: "G-C3K9D7C9F1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
