import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    //${props.className}은 내부에서 정의한 클래스, ${classes.card}는 외부에서 정의한 클래스!
    <div className={` ${classes.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
