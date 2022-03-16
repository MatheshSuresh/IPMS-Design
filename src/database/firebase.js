import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGJpY3NDhx3zSDmZSq_DgNBsPp47eKa4M",
    authDomain: "boardroom-b7bdb.firebaseapp.com",
    databaseURL: "https://boardroom-b7bdb-default-rtdb.firebaseio.com",
    projectId: "boardroom-b7bdb",
    storageBucket: "boardroom-b7bdb.appspot.com",
    messagingSenderId: "69253234082",
    appId: "1:69253234082:web:2a3a83a462f3c61d4d46fb"
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };