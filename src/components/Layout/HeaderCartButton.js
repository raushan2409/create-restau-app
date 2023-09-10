import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      {/* icon ,some text than a little badge with a current no of item in the card */}
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{/* dummy value */}3</span>
    </button>
  );
};
export default HeaderCartButton;
