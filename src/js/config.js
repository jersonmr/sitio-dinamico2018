import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyAirmufwS5upQ_srGmCofMnoxFLtJjDJZ0",
  authDomain: "mi-primer-sitio-web-dinamico.firebaseapp.com",
  databaseURL: "https://mi-primer-sitio-web-dinamico.firebaseio.com",
  projectId: "mi-primer-sitio-web-dinamico",
  storageBucket: "mi-primer-sitio-web-dinamico.appspot.com",
  messagingSenderId: "199865887053"
};

const init = () => firebase.initializeApp(config);

init();
