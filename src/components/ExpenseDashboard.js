import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses.js";
import ExpenseList from "./ExpenseList.js";
import ExpenseListFilters from "./ExpenseListFilters.js";
import ExpenseSummary from "./ExpensesSummary.js"

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseSummary />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ExpenseDashboardPage);
