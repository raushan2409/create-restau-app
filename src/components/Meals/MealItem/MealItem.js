import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'

//receives some props
const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}` //tofixed(2) will make sure that we always render 2 decimal place
  return (
    <li  className={classes.meal}>
      {/* props.name will receives data from availablemeals  dummymeals.map so u can take any name like name and take anything */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        {/* i wonna render the simple form which allows user to user to enter the amount , the amount of meal that wonna add to the cart and then add to cart button  mealitemform.js file for that component */}
<MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
