import classes from "./Card.module.css";

// props because we will needs to access props childrento get access to the wrapped content
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
