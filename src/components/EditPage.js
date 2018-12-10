import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses.js";

const EditPage = props => {
  console.log(props);
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          className="form"
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
