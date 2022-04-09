import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8H3gy__ClBUEesUcItNIbkkZtg95hXXg",
    authDomain: "laptop-warehouse.firebaseapp.com",
    projectId: "laptop-warehouse",
    storageBucket: "laptop-warehouse.appspot.com",
    messagingSenderId: "548637975965",
    appId: "1:548637975965:web:27f55970e84ab376a1bb74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app; 