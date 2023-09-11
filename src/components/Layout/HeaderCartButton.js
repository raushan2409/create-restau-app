import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    // this can be confusing but in the enda pointer at showcarthandle(app.js) to that headercartbutton( we read if we have to pass multiple or prop chain like this where we pass a prop through multiple levels of components could be replaced with context indeed we could be using context here)
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{/* dummy value */}3</span>
    </button>
  );
};
export default HeaderCartButton;
