import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses.js";

const AddExpense = props => (
  <div>
    <h1>Add expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpense);
