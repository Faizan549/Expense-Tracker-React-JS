import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  function saveExpenseDateHandler(enteredExpenseData) {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveDate={saveExpenseDateHandler} />
    </div>
  );
}
export default NewExpense;
