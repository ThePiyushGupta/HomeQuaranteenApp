import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as firebase from "firebase";

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

var firebaseapp = firebase.initializeApp(firebaseConfig);

export default function App() {
    var idk = firebaseapp
        .database()
        .ref("UserDetails/" + "P3HGKX6JtY5qRvyOYX7J")
        .toJSON();
    console.log(idk);
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
