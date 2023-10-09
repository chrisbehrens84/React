import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [showErrorModal, setShowErrorModal] = useState();

  const clearError = () => {
    setShowErrorModal(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge= ageInputRef.current.value
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setShowErrorModal({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setShowErrorModal({
        title: "Invalid age",
        message: "Please enter a valid age (Greater than 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value ='';
    ageInputRef.current.value='';
  };
  return (
    <>
      {showErrorModal && (
        <ErrorModal
          clearError={clearError}
          title={showErrorModal.title}
          message={showErrorModal.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="user">Name:</label>
          <input
            type="text"
            id="user"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
