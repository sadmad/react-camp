import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
      color: ${props => props.invalid? 'red' : 'black'}
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid ${props => props.invalid? 'red' : '#ccc'} ;
      background: ${props => props.invalid? 'rgb(241, 191, 186)' : 'transparent'}
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

    &.invalid label {
      color: red;
    }
  `;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
