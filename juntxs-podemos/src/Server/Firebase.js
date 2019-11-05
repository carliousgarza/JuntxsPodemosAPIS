var firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");

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
class Firebase {
    constructor(){
        firebase.initializeApp(config);  
        this.db = firebase.firestore()
        this.authen = firebase.auth()
        
    }

    get auth() {
        return firebase.auth()
    }

    resolvers() {
        return {
            Query:{
                forms: (root, args, context, info) => {
                    const list = []
                    // Get all the projects that are from the user who started the session
                    return this.db.collection('Formularios')//.where('author', '==', this.auth.currentUser.uid)
                    .get().then(
                        (response) => { response.docs.map(
                            item => {
                                return list.push(item.data())
                            })
                            return list
                        }
                    )
                },
                form: (root, args, context, info) => {
                    const { id } = args
                    // Get the data of a specific project
                    return this.db.collection('Formularios').doc(id).get().then(
                        (response) => {
                            return response.data()
                        }
                    )
                }
            },
            Mutation:{
                CreateComponent: (parent, args, context, info) => {
                    console.log(args)
                    const {id} = args
                    console.log(id)
                    return false
                }
            },
        }
    }
}

module.exports = Firebase;