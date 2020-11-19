import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBmAolRf7SnrMM6KuXSCL4RfXKm3XZrSvM',
  authDomain: 'facebook-clone-fdc82.firebaseapp.com',
  databaseURL: 'https://facebook-clone-fdc82.firebaseio.com',
  projectId: 'facebook-clone-fdc82',
  storageBucket: 'facebook-clone-fdc82.appspot.com',
  messagingSenderId: '892833735661',
  appId: '1:892833735661:web:92612a36ff239546c33de4',
  measurementId: 'G-FFZ5JX4BV9'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
