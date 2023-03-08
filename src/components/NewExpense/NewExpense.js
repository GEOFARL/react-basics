import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [isNewExpense, setIsNewExpense] = useState(true);

  const newExpenseHandler = () => setIsNewExpense((prevVal) => !prevVal);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isNewExpense && (
        <div className="new-expense__actions centered">
          <button type="submit" onClick={newExpenseHandler}>
            Add New Expense
          </button>
        </div>
      )}
      {!isNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onBtnClick={newExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
