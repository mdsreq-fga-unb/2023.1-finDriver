import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBm_DCaW2UWOtyoVINb2gKvG_U5mFysnjk",
  authDomain: "findriver-mds.firebaseapp.com",
  projectId: "findriver-mds",
  storageBucket: "findriver-mds.appspot.com",
  messagingSenderId: "949285888454",
  appId: "1:949285888454:web:713f184812eecef03a12c7"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
