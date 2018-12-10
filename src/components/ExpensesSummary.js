import React from "react";
import { connect } from "react-redux";
import {Link } from "react-router-dom"
import numeral from "numeral"
import getVisibleExpenses from "../selectors/expenses.js"
import totalExpenses from "../selectors/expenses-total.js"


const ExpensesSummary = props => {
  const nbItems = props.expenses.length;
  const total = totalExpenses(props.expenses);
  const formattedTotal = numeral(total).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{nbItems}</span> expenses totalling <span>{formattedTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/add">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return { expenses: getVisibleExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpensesSummary);