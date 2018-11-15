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

const onDataChange = (snapshot) => {
  console.log("Update");
  console.log(snapshot.val());
}

database
  .ref()
  .on("value", onDataChange, (e) => {
    console.log("Error occured while fetching data", e)
  });

// .then(snapshot => {
//   console.log("Data success");
// });

setTimeout(() => {
  //change the data
  database.ref().update({
    "location/ville": "Villenneuhs"
  })
}, 3000)

setTimeout(() => {
  //change the data
  database.ref().off("value", onDataChange)
}, 8000)

setTimeout(() => {
  //change the data
  database.ref().update({
    "location/ville": "Villennes"
  })
}, 13000)


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
