import React from "react";
import { connect } from "react-redux";
import numeral from "numeral"
import getVisibleExpenses from "../selectors/expenses.js"
import totalExpenses from "../selectors/expenses-total.js"


const ExpensesSummary = props => {
  const nbItems = props.expenses.length;
  const total = totalExpenses(props.expenses);

  return (
    <p>Viewing {nbItems} expenses totalling {numeral(total).format("$0,0.00")} </p>
  )
}


const mapStateToProps = state => {
  return { expenses: getVisibleExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpensesSummary);