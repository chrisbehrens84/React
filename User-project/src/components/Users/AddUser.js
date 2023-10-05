import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";


function AddUser(props) {

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [showErrorModal, setShowErrorModal] = useState()

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value)
  }
 
  const clearError = () => {
    setShowErrorModal(null)
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredUserAge)
    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
      setShowErrorModal({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;

    }
    if(+enteredUserAge < 1) {
      setShowErrorModal({
        title: 'Invalid age',
        message: 'Please enter a valid age (Greater than 0)'
      })
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge)
    setEnteredUserAge('')
    setEnteredUserName('')
    // props.userHandler(userInput)
  }
  return (
    <>
    {showErrorModal && <ErrorModal clearError={clearError} title={showErrorModal.title} message={showErrorModal.message}/>} 
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="user">Name:</label>
        <input onChange={userNameChangeHandler}
        type="text" 
        id="user" 
        value={enteredUserName} 
        />
        <label htmlFor="age">Age:</label>
        <input onChange={userAgeChangeHandler}
        type="number" 
        id="age" 
        value={enteredUserAge} 
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
    </>
  )
}

export default AddUser;