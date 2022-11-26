import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}{" "}
      {/*버튼 태그의 컨텐츠(Add User)를 가져오고 싶을 때 사용 */}
    </button>
  );
};

export default Button;
