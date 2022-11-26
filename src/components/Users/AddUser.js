import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  /*Card는 <form> <input>처럼 내장된 html 컴포넌트가 아닌 사용자 정의 컴포넌트다.
  사용자 정의 컴포넌트들은 이 className이라는 속성과
   * 어떻게 작업 해야하는지 모른다. 따라서 Card컴포넌트에서 별도의 처리를 해줘야 한다.*/
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
