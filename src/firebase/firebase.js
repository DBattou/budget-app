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

// // Firebase does not work with array (it auto gives a ID=index of the array 1, 2, 3...)
// const notes = [{
//   id: "identifier1",
//   title: "First model",
//   body: "This my note"
// }, {
//   id: "identifier2",
//   title: "Second model",
//   body: "This my super mega note"
// }]
// database.ref("notes").set(notes)


// // Array structure we want to store :
// const firebaseNotes = {
//   notes: {
//     identifier1: {
//       title: "First model",
//       body: "This my note"
//     },
//     identifier2: {
//       title: "Second model",
//       body: "This my super mega note"
//     }
//   }
// }

// We can use push()
const reference = database.ref("notes").push({
  title: "First model",
  body: "This my note"
})

database.ref("notes").push({
  title: "Second model",
  body: "This my super mega note"
})

console.log(reference.toString());

reference.set({ "dentifirce": "1235dollars" })

database.ref("notes/-LRMUsgTdJyyKTjCZa7k").remove()