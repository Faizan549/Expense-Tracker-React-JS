import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
let DUMMY_EXPENSE = [];

function App() {
  let [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  fetch("")

  function addExpenseHandler(expense) {
    let updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
