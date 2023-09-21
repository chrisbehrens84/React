import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


function NewExpense(props) {
  const [isEditing, setIsEditing]= useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
    editingHandler()
  }

  const editingHandler = () => {
    setIsEditing(!isEditing)
  }

  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm editingHandler={editingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense