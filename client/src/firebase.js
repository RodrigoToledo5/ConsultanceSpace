import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyARxI0P_6v5lLBebKweesK0KahBItZ1NYw",
  authDomain: "consultancespace-52fe4.firebaseapp.com",
  projectId: "consultancespace-52fe4",
  storageBucket: "consultancespace-52fe4.appspot.com",
  messagingSenderId: "266128507584",
  appId: "1:266128507584:web:880a826551c595a60d2325"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

    const db = app.firestore();
    const auth = app.auth();
    

    export {db, auth};
    