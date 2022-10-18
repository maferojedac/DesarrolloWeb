//inicializando 
/* cambiamos "admin" a "firebase" */
var firebase = require("firebase-admin");

var serviceAccount = require("../key.json");

/* exportando la bd de firebase */
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

//creando bd
const db = firebase.firestore();

module.exports = {
    db
}