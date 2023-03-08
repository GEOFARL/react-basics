import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import React, { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterHandler = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  return (
    <div>
      <ExpensesFilter onUpdateYear={filterHandler} selected={filteredYear} />
      <Card className="expenses">
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
