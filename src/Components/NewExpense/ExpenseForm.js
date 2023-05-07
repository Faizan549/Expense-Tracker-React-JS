import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  let [enteredTittle, setEnteredTittle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  function tittleChangeHandler(event) {
    setEnteredTittle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    let expenseData = {
      tittle: enteredTittle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveDate(expenseData);
    setEnteredTittle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tittle</label>
          <input
            type="text"
            value={enteredTittle}
            onChange={tittleChangeHandler}
          ></input>
          {/* <input type="text"></input> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
          {/* <input type="number"></input> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
          {/* <input type= "date"/> */}
        </div>
      </div>
      <div className="new-expense__action">
        <button>Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
