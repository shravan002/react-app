import React, { useState } from "react";
import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 56.99,
    date: new Date(2020, 5, 8),
  },
  {
    id: "e2",
    title: "Pen ",
    amount: 83.66,
    date: new Date(2020, 1, 29),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 779.88,
    date: new Date(2019, 2, 16),
  },
  {
    id: "e4",
    title: "Wallet",
    amount: 99.91,
    date: new Date(2021, 6, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };

  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
      </div>
      <div>
        <Expense items={expenses} />
      </div>
    </div>
  );
}

export default App;
