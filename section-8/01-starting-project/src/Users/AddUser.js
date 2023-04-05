import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
      return;
    }
    if(+enteredAge < 1) {
      return;
    }
    setEnteredAge('');
    setEnteredUsername('');

  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler}/>
        <label htmlFor="username">Age (Years)</label>
        <input id="age" type="text" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
