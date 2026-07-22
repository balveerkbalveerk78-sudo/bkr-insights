import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Bw2xvgM0ofsRZsZWL0tm9iSegxbGWY4",
  authDomain: "bkr-insights.firebaseapp.com",
  projectId: "bkr-insights",
  storageBucket: "bkr-insights.firebasestorage.app",
  messagingSenderId: "787833601930",
  appId: "1:787833601930:web:d9b273d14b553c60509273",
  measurementId: "G-E4XKFC7MV2"
};
};

const app = initializeApp(firebaseConfig);

export default app;
