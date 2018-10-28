import { connect } from "react-redux";
import React from "react";
import { addExpense } from "../actions/expenses.js";

const ExpenseDashboardPage = ({ expenses, addExpense }) => {
  const handleAddExpense = e => {
    e.preventDefault();
    // const option = e.target.elements.option.value.trim();

    console.log(e);

    addExpense();
  };

  return (
    <div>
      This is from dashboard component
      <form onSubmit={handleAddExpense}>
        <input type="text" name="description" />
        <button className="button">Add expense</button>
      </form>
      {expenses.map(expense => {
        return <p key={expense.id}>{expense.description}</p>;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
  addExpense: expense => {
    dispatch(
      addExpense(
        {
          id: "123003",
          description: "coffee",
          note: "",
          amount: 450000,
          createdAt: 200
        },
        { ...expense }
      )
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseDashboardPage);
