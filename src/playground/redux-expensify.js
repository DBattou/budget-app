import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Action generators
// ADD_EXPENSE
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

// REMOVE_EXPENSE
const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};

// SET_TEXT_FILTER
const setTextFilter = text => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

// SET_START_DATE
const setStartDate = date => {
  return {
    type: "SET_START_DATE",
    startDate: date
  };
};

// SET_END_DATE
const setEndDate = (date = undefined) => {
  return {
    type: "SET_END_DATE",
    endDate: date
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
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (action.id === expense.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
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
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// get visible expenses
const getVisibleExpenses = (expenses, { sortBy, text, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = typeof text !== "string" || expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1;
    }
  });
}


// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

// Program
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
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
  addExpense({ description: "lessive rent", amount: 300, createdAt: 150 })
);
const expenseOne = store.dispatch(
  addExpense({ description: "dentifrice", amount: 450, createdAt: 200 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "condom", amount: 500, createdAt: 300 })
);

// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense(expenseZero.expense.id, { amount: 480, createdAt: 150 }));

store.dispatch(setTextFilter(""));

// store.dispatch(setTextFilter(""));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));

store.dispatch(setEndDate(1000));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(234));

const demoState = {
  expenses: [
    {
      id: "sdfsoinxcnjv",
      description: "January Rent",
      note: "This was the final payment fo that adress",
      amount: 54500,
      createdAt: 200
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
