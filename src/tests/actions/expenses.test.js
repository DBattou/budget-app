import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, removeExpense, editExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import database  from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

test("Should setup remove expense action", () => {
  const action = removeExpense({ id: "ABC123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "ABC123" });
});

test("sould edit the expense using edit expense action", () => {
  const action = editExpense("ABC123", { amount: 123 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "ABC123",
    updates: { amount: 123 }
  });
});

test("Should setup the addExpense action", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "mouse",
    amount: 30,
    note: "this one is better",
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    
  }).then((snapshot) => {
//      console.log(snapshot.val().expense);
      
      expect(snapshot.val().expense).toEqual(expenseData);
      done();
    })
})

test('should add expense with defaults to database and store', () => {
  
})

// test("Should setup add expense action with the default value", () => {
//   const expenseData = {};
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String)
//     }
//   });
// });
