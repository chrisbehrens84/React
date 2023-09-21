import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "../NewExpense/ExpensesChart";

function Expenses(props) {
  const [Year, setYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === Year;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={Year} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
