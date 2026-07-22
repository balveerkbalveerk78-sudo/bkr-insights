import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-Bw2xvgMOofsRZzsZWLOtm9iSegxbGWY4",
  authDomain: "bkr-insights.firebaseapp.com",
  projectId: "bkr-insights",
  storageBucket: "bkr-insights.firebasestorage.app",
  messagingSenderId: "787833601930",
  appId: "1:787833601930:web:d9b273d14b553c60509273",
  measurementId: "G-E4XKFC7MV2"
};

const app = initializeApp(firebaseConfig);

export default app;
