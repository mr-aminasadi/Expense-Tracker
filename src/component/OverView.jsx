import { useState } from "react";
import FormAction from "./FormAction";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const OverView = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <p className="font-extrabold text-xl">Balance : {income - expense}</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn flex items-center font-medium text-sm ${isShow ? "text-red-700 bg-red-100":""}`}
        >
          {isShow ? "Cancel" : "add"}
          {isShow ? <BiChevronUp /> : <BiChevronDown />}
        </button>
      </div>
      {isShow && <FormAction addTransaction={addTransaction} setIsShow={setIsShow}/>}
      <div className="flex justify-between items-center">
        <div className="expenseBox">
          Expense :<span className="font-bold text-red-700">{expense} $</span>
        </div>
        <div className="expenseBox">
          Income :<span className="font-bold text-green-700">{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverView;
