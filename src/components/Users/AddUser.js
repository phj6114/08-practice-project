import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //함수형 컴포넌트에서만 useRef()를 사용가능
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const refEnteredName = nameInputRef.current.value;
    const refEnteredAge = ageInputRef.current.value;
    if (
      refEnteredName.trim().length === 0 ||
      refEnteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+refEnteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(refEnteredName, refEnteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  /*Card는 <form> <input>처럼 내장된 html 컴포넌트가 아닌 사용자 정의 컴포넌트다.
  사용자 정의 컴포넌트들은 이 className이라는 속성과
   * 어떻게 작업 해야하는지 모른다. 따라서 Card컴포넌트에서 별도의 처리를 해줘야 한다.*/
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
          {/*버튼 컴포넌트로 "Add User"라는 프로퍼티를 전송할 수 있음*/}
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
