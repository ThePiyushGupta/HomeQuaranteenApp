import * as firebase from "firebase";
import "@firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyCS8QkBOWN8jpOuQnXTqeFk4j2vZtDA-Q0",
    authDomain: "homequaranteenapp.firebaseapp.com",
    databaseURL: "https://homequaranteenapp.firebaseio.com",
    projectId: "homequaranteenapp",
    storageBucket: "homequaranteenapp.appspot.com",
    messagingSenderId: "493145677242",
    appId: "1:493145677242:web:eb5822735192ea027e1183",
    measurementId: "G-97BE35ZWKX",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
