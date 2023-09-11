import Header from './components/Layout/Header';
import './App.css';
import { Fragment } from 'react';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
    <Header/>
     <main>
      {/* main html element */}
<Meals />
     </main>
    </Fragment>
  );
}

export default App;
