import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses.js";

const AddExpense = props => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push("/dashboard");
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpense);
