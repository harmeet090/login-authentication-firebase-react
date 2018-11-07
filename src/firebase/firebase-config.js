import firebase from 'firebase';

const config = {
    apiKey: "your api key",
    authDomain: "authdomain.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    projectId: "projectId",
    storageBucket: "bucket.appspot.com",
    messagingSenderId: "messagingSenderId"
};

export const firebaseApp = firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase;
