// Import custom components:
import React from 'react';
import Expenses from './components/Expenses/Expenses';

// App function to handle all components:
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 3, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    },
  ];

  // JSX (JavaScript XML) code below:
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );


  // // Alternate for above code (non-JSX React JS code):
  // // (Under the hood code created when you use JSX)
  // // remember: import React from 'react';
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let\'s get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

}

export default App; //export so it may be imported
