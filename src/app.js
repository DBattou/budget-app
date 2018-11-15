import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./routers/AppRouter.js";
import store from "./store/configureStore.js";
import { addExpense, removeExpense, editExpense } from "./actions/expenses.js";
import { setTextFilter, sortByDate, setEndDate } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import numeral from "numeral";
import "./firebase/firebase.js";
// import "./playground/promises.js";

numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ","
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t"
  },
  ordinal: function(number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "€"
  }
});

store.dispatch(
  addExpense({
    description: "Sandwich",
    note: "",
    amount: 15,
    createdAt: 1541026800000
  })
);
store.dispatch(
  addExpense({
    description: "Gaz bill",
    note: "",
    amount: 1500,
    createdAt: 1541199600000
  })
);
let test = store.dispatch(
  addExpense({
    description: "Water bill",
    note: "",
    amount: 2500,
    createdAt: 1541113200000
  })
);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
