import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyBYFWDFcadLNdzFsuTNe5GV8k_SVL_dOyw",
  authDomain: "clientes-d05fe.firebaseapp.com",
  projectId: "clientes-d05fe",
  storageBucket: "clientes-d05fe.appspot.com",
  messagingSenderId: "508715739208",
  appId: "1:508715739208:web:ed7776e1ce637d2174907d"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

    const db = app.firestore();
    const auth = app.auth();
    

    export {db, auth};
    