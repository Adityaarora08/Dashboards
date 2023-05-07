import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
var firebaseConfig = {
    apiKey: "AIzaSyAY16BSO2FccQpku5lYiMvfykhAeicmG1U",
    authDomain: "projectz-e4aa5.firebaseapp.com",
    projectId: "projectz-e4aa5",
    storageBucket: "projectz-e4aa5.appspot.com",
    messagingSenderId: "130995724572",
    appId: "1:130995724572:web:3b016fbb9b5cd7f48c1ad9"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
