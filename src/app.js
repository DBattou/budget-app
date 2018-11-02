import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import Routes from "./routers/AppRouter.js";
import store from "./store/configureStore.js";
import { addExpense, removeExpense, editExpense } from "./actions/expenses.js";
import { setTextFilter, sortByDate, setEndDate } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";

store.dispatch(
  addExpense({
    description: "Sandwich",
    note: "",
    amount: 15,
    createdAt: 2000000
  })
);
store.dispatch(
  addExpense({
    description: "Gaz bill",
    note: "",
    amount: 1500,
    createdAt: 1000000
  })
);
let test = store.dispatch(
  addExpense({
    description: "Water bill",
    note: "",
    amount: 2500,
    createdAt: 10000000
  })
);

store.dispatch(editExpense({ id: test.id, description: "Enculé " }));

// store.dispatch(setTextFilter("bill"));

// const filters = store.getState().filters;
// const expenses = store.getState().expenses;

// console.log(getVisibleExpenses(expenses, filters));

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
