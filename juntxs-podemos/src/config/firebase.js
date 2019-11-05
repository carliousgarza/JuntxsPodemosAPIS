import firebase from "firebase";

const config = {
    apiKey: "AIzaSyA85u7ua6DG0WMkRGbPN5879gCfYIE1g6A",
    authDomain: "juntxspodemosapis.firebaseapp.com",
    databaseURL: "https://juntxspodemosapis.firebaseio.com",
    projectId: "juntxspodemosapis",
    storageBucket: "juntxspodemosapis.appspot.com",
    messagingSenderId: "500954482664",
    appId: "1:500954482664:web:0cc176fc1629899832c65d",
    measurementId: "G-BN6ZJJTDBB"
  };

const fire = firebase.initializeApp(config)
export default fire