import * as firebase from 'firebase';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyAZgfYTrnsrmxrB_ZkbiRes84IuZSVNtXs",
  authDomain: "mobway-schedule-tracker.firebaseapp.com",
  databaseURL: "https://mobway-schedule-tracker.firebaseio.com",
  projectId: "mobway-schedule-tracker",
  storageBucket: "mobway-schedule-tracker.appspot.com",
  messagingSenderId: "381332215711"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();