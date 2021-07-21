import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // States
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  // Change Handlers
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput, //spread operator to add existing key values
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput, //spread operator to add existing key values
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput, //spread operator to add existing key values
      enteredDate: event.target.value,
    });
  };


  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expenses</button>
    </div>
  </form>
};

export default ExpenseForm;
