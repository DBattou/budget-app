import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should setup remove expense action", () => {
  const action = removeExpense({ id: "ABC123" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "ABC123" });
});

test("sould edit the expense using edit expense action", () => {
  const action = editExpense("ABC123", { amount: 123 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "ABC123",
    updates: { amount: 123 }
  });
});

test("Should setup the addExpense action", () => {
  const expenseData = {
    description: "tooth brush",
    amount: 120000,
    createdAt: 0,
    note: "Lundi 12 Novembre"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should setup add expense action with the default value", () => {
  const expenseData = {};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
