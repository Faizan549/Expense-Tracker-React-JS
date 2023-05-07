import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      {props.item.map(
        expense => (
        <ExpenseItem
          date={expense.date}
          tittle={expense.tittle}
          amount={expense.amount}
        />
      )
      )
      }
    </div>
  );
}
export default Expenses;
