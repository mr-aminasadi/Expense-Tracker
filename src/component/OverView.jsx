import { useState } from "react";
import FormAction from "./FormAction";

import { BiChevronDown,BiChevronUp } from "react-icons/bi";



const OverView = ({ income, expense,addTransaction }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <p>Balance : {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)} className="flex items-center">
          {isShow ? "Cancel" : "add"}
          {isShow ? <BiChevronUp/> : <BiChevronDown/>}
        </button>
      </div>
      {isShow && <FormAction addTransaction={addTransaction}/>}
      <div className="flex justify-between items-center">
        <div className="">Expense {expense}</div>
        <div className="">Income {income}</div>
      </div>
    </>
  );
};

export default OverView;
