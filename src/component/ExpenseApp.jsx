import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import OverView from "./OverView";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValue) => {
    console.log(formValue);
    setTransaction([...transaction, { ...formValue, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transaction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transaction]);

  return (
    <section className="flex flex-col w-80 bg-white border border-gray-200 rounded-md p-3 ">
      <OverView
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <Transaction transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
