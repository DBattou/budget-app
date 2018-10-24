import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Actions
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Action generators
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};
// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => {
        return expense.id !== action.id;
      });
    default:
      return state;
  }
};

// Filters Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

// Program
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  addExpense({
    description: "Frichti",
    note: "Dej BAP 22 midi",
    amount: 54500,
    createdAt: 0
  })
);

const expenseZero = store.dispatch(
  addExpense({ description: "lessive", amount: 300 })
);
const expenseOne = store.dispatch(
  addExpense({ description: "dentifrice", amount: 450 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "condom", amount: 500 })
);

console.log(expenseOne);

store.dispatch(removeExpense(expenseOne.expense.id));

const demoState = {
  expenses: [
    {
      id: "sdfsoinxcnjv",
      description: "January Rent",
      note: "This was the final payment fo that adress",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
