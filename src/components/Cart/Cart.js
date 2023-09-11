import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  //curly braces in ul bc jsx
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  );
  return (
    // <div>
    <Modal>
      {/* i wonna render this cart in a modal(wrapper) by using react portel */}
      {/* i wonna rendert my cartitems */}
      {/* div with total amount  */}
      {/* div with the actions for the card */}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      {/* </div> */}
    </Modal>
  );
};

export default Cart;
