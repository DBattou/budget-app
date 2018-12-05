import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses.js";
import ExpenseListItem from "./ExpenseListItem.js";
import selectExpense from "../selectors/expenses.js";

const ExpenseList = props => (
  <div>
    <h2>Expense List</h2>
    {props.expenses.map(expense => {
      return (
        <ExpenseListItem key={expense.id} {...expense} />
      )
    })}
  </div>
);

const mapStateToProps = state => {
  return { expenses: selectExpense(state.expenses, state.filters) };
};

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => {
      return dispatch(addExpense({ ...expense }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);
