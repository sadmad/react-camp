import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.jsx";


const AddUser = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
