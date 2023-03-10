import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterHandler = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filteredYear === expense.date.getFullYear().toString()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onUpdateYear={filterHandler} selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
