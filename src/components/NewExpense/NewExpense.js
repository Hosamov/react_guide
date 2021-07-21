import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  return <div className="new-expense">
    <div className="new-expense">
      <ExpenseForm />
    </div>
  </div>
};

export default NewExpense;
