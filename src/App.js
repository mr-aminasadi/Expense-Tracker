import React from "react";
import ExpenseApp from "./component/ExpenseApp";


const App = () => {
  return (
   <div className="app">
    <header>
      <h2>Expense Tracker</h2>
    </header>
    <ExpenseApp/>
   </div>
  );
};

export default App;
