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

database
  .ref()
  .once("value")
  .then(snapshot => {
    console.log(snapshot);
  });

// database
//   .ref()
//   .set({
//     name: "Battou",
//     age: 36,
//     isSingle: false,
//     location: {
//       city: "Paris",
//       country: "Franceodf"
//     }
//   })
//   .then(result => {
//     console.log("yes its works perfectly");
//     console.log(result);
//   })
//   .catch(error => {
//     console.log("merde ça n'a pas marché");
//     console.log(error);
//   });

// database.ref().update({
//   "location/city": "Villennes sur seine"
// });
