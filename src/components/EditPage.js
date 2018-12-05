import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses.js";

const EditPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Edit the expense n°</h1>
      <p>{props.match.params.id}</p>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push("/dashboard");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          props.history.push("/dashboard");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditPage);
