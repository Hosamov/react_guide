// NOTE: A component in React is just a JS function.
import React, { useState } from 'react'; //useState (hook) - allows defining values as state

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // *useState - a react hook; must be called only within a React component function
  const [title, setTitle] = useState(props.title); // returns an array [value itself, updating function]
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle('Updated!'); // Set a new title
    console.log(title);
  };

  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
  }

  export default ExpenseItem;
