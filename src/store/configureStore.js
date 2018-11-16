import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses.js";
import filtersReducer from "../reducers/filters.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }),
  composeEnhancers(applyMiddleware(thunk)) // <= se more on that : https://redux.js.org/api/createstore
);

export default store;
