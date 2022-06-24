import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const INITIAL_APP = [
  {
      id: uuidv4(),
      title: "Car Insuranse",
      date: new Date(2021, 2, 21),
      amount: 232.3
  },
  {
      id: uuidv4(),
      title: "Food",
      date: new Date(2021, 3, 21),
      amount: 23.3
  },
  {
      id: uuidv4(),
      title: "Car",
      date: new Date(2021, 5, 21),
      amount: 23244.3
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_APP);

  const addExpenseHandler = expense => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    })
  }

  return (
    <>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
      </div>
    </>
  );
}

export default App;
