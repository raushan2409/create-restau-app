import Header from "./components/Layout/Header";
import "./App.css";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
    <Cart />
      <Header />
      <main>
        {/* main html element */}
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
