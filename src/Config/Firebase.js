import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAPT2vA_VM-gwQRZ28F5U3MVhA4UMS025A",
    authDomain: "myquizapp-5eaf2.firebaseapp.com",
    databaseURL: "https://myquizapp-5eaf2.firebaseio.com",
    projectId: "myquizapp-5eaf2",
    storageBucket: "myquizapp-5eaf2.appspot.com",
    messagingSenderId: "894818215731",
    appId: "1:894818215731:web:68da4570b43e61a9fa8046",
    measurementId: "G-NQQHP1D8TD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;