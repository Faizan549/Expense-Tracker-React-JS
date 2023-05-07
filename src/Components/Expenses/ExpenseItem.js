import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.tittle}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <input type="text" value={newTittle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Tittle</button> */}
    </div>
  );
}
export default ExpenseItem;
