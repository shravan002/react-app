import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };
  const AddNewExpenseHandler = () => {
    setAddExpense(true);
  };
  const StopEditingHandler = () => {
    setAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={AddNewExpenseHandler}>Add new Expense</button>
      )}
      {addExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={StopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
