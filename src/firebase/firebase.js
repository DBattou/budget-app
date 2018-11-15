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

// Initial datas
//var expenseListRef = firebase.database().ref('expense_list');
//var newMessageRef = expenseListRef.push({
// expenseListRef.push({
//   description: "Sandwich",
//   note: "",
//   amount: 1589,
//   createdAt: 1541026800000
// });

// expenseListRef.push({
//   description: "Condom",
//   note: "",
//   amount: 476,
//   createdAt: 1541026800000
// });

// expenseListRef.push({
//   description: "RDR2",
//   note: "",
//   amount: 234,
//   createdAt: 1541026800000
// });

/*
// Creating an array using once()
database.ref("expense_list").once("value").then((snapshot) => {
  // console.log(snapshot.val())
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
})
*/

/*
// Creating an array on data changes. 
// ==> Immutability: should return a brand new array each time data has changed
database.ref("expense_list").on("value", (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })

  console.log(expenses)
  return expenses;
})
*/

// Useful methods : on child removed
database.ref("expense_list").on("child_removed", (snapshot) => {
  console.log("child removed", snapshot.key, snapshot.val())
})

// Useful methods : on child changed
database.ref("expense_list").on("child_changed", (snapshot) => {
  console.log("child changed", snapshot.key, snapshot.val())
})

// Useful methods : Child added
// Useful methods : Child moved

// We've appended a new message to the message_list location.
// var path = newMessageRef.toString();
// path will be something like
// 'https://sample-app.firebaseio.com/message_list/-IKo28nwJLH0Nc5XeFmj'

// More infos : https://firebase.google.com/docs/reference/js/firebase.database.Reference#on