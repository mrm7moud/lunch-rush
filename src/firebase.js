import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA1HTNqCDy-BA26BPeJTucIJcLxibpjC2w',
  authDomain: 'lunch-rush-73801.firebaseapp.com',
  databaseURL: 'https://lunch-rush-73801.firebaseio.com',
  projectId: 'lunch-rush-73801',
  storageBucket: 'lunch-rush-73801.appspot.com',
  messagingSenderId: '1053126363907'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
