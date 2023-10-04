import React, {useState} from "react";
import classes from './Form.module.css';

const initalUserInput = {
  'current-savings': 1000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
}


function Form(props) {

  const [userInput, setUserInput] = useState(initalUserInput)

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(event);
  
    props.calculateHandler(userInput)
  };

  const resetHandler = () => {
    setUserInput(initalUserInput)
  };

  const changeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: +value,
      }
    })
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => 
              changeHandler('current-savings', event.target.value)
            }
            value ={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input  onChange={(event) => 
              changeHandler("yearly-contribution", event.target.value)
            }
            value ={userInput["yearly-contribution"]}
            type="number" 
            id="yearly-contribution" />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) => 
              changeHandler("expected-return", event.target.value)
            }
            value ={userInput["expected-return"]}
            type="number" 
            id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => 
              changeHandler("duration", event.target.value)
            }
            value={userInput['duration']}
            type="number" 
            id="duration" />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
