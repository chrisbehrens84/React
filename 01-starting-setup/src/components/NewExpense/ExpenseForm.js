import React, {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    console.log(enteredTitle)
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(enteredAmount)
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    console.log(enteredDate)
  };


  // const inputChangeHandler = (identifer, value) => {
  //   if (identifer === 'title') {
  //     setEnteredTitle(value);
  //   }
  //   else if (identifer === 'amount'){
  //     setEnteredAmount(value)
  //   }
  //   else {
  //     setEnteredDate(value)
  //   }
  // }

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // })

  // const titleChangeHandler = (event) => {
  //   console.log(event)
  //   setUserInput((prevState) => {
  //     return {
  //       ...prevState,
  //       enteredTitle: event.target.value
  //     }
  //   });
  // }

  
  // const amountChangeHandler = (event) => {
  //   console.log(event)
  //   setUserInput({
  //    ...userInput,
  //    enteredAmount: event.target.value
  //   })

  //   console.log(userInput)
  // }

  // const dateChangeHandler = (event) => {
  //   console.log(event)
  //   setUserInput({
  //    ...userInput,
  //    entereddate: event.target.value
  //   })

  //   console.log(userInput)
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    

    props.onSaveExpenseData(expenseData)
  
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min=".01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.editingHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;


