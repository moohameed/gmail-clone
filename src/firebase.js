import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBCiGq-5A8gBka2H5w-3DSjeNNjuU35Ag8",
    authDomain: "custom--clone.firebaseapp.com",
    projectId: "custom--clone",
    storageBucket: "custom--clone.appspot.com",
    messagingSenderId: "45449394964",
    appId: "1:45449394964:web:5ac92548f13ee6b43b2001"
  };

   firebase.initializeApp(firebaseConfig) 
  const db = firebase.firestore() ;
  const auth = firebase.auth() ;
  const provider = new firebase.auth.GoogleAuthProvider() ;

  export  {db,auth , provider}