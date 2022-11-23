import React from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <Link to={props.name}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
