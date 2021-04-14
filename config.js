import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCEXkwb82dXN9lCcGlMaZ5JGP6MzLMzfN8",
  authDomain: "storyhub-44842.firebaseapp.com",
  projectId: "storyhub-44842",
  storageBucket: "storyhub-44842.appspot.com",
  messagingSenderId: "326503212720",
  appId: "1:326503212720:web:3c3138413bcb335d8abd75"
};
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();