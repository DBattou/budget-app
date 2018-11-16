import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDPLbM-anDXSRDANfki0QVzZmm1LRHzu3Y",
  authDomain: "budgetapp-7f3ff.firebaseapp.com",
  databaseURL: "https://budgetapp-7f3ff.firebaseio.com",
  projectId: "budgetapp-7f3ff",
  storageBucket: "budgetapp-7f3ff.appspot.com",
  messagingSenderId: "254617785073"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
