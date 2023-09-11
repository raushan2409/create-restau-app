import { Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = ()=>{ setCartIsShown(true) };

  const hideCartHandler = () =>{ setCartIsShown(false) };

  //in the end we wonna render the cart component conditionally by wrapping 

  return (
    <Fragment>
    {/* if true than render else not */}
    {/* we've pass onclose hidecarthandler to hide  */}
    {cartIsShown && <Cart onClose={hideCartHandler} />} 

{/* we're calling showcarthandler inside the header and thename is on me . we want to execute these function in header component whenever the headercartButton is clicked */}
      <Header onShowCart={showCartHandler} />
      <main>
        {/* main html element */}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
