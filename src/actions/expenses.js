import uuid from "uuid";
import database from "../firebase/firebase.js";

// ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

// Start Add Expense
export const startAddExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  const expense = {
    description,
    note,
    amount,
    createdAt
  };
  database.ref("expenses").set({ expense });
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
