import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  console.log(props)
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Close</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  console.log(props)
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop 
          onClick={props.clearError} 
        />,
        document.getElementById("backdrop-root")
      )}
       {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title} 
          message ={props.message}
          onClick={props.clearError} 
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
