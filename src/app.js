import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Routes from "./routers/AppRouter.js";
import store from "./store/configureStore.js";
import { addExpense, removeExpense, editExpense } from "./actions/expenses.js";
import {
  setTextFilter,
  sortByDate,
  setEndDate,
  setStartDate,
  sortByAmount
} from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

store.dispatch(
  addExpense({
    description: "Sandwich",
    note: "",
    amount: 15,
    createdAt: 20000
  })
);
store.dispatch(
  addExpense({
    description: "Gaz bill",
    note: "",
    amount: 1500,
    createdAt: 1000
  })
);
store.dispatch(
  addExpense({
    description: "Water bill",
    note: "",
    amount: 157,
    createdAt: 4000
  })
);

store.dispatch(setTextFilter("water"));

// const filters = store.getState().filters;
// const expenses = store.getState().expenses;

// console.log(getVisibleExpenses(expenses, filters));

ReactDOM.render(<App />, document.getElementById("root"));
