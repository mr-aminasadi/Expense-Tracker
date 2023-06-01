import { useState } from "react";

const inputStyle = "border border-[#ccc] px-2.5 py-3 outline-none";

const FormAction = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-between min-h-[170px] mb-7"
    >
      <input
        className={inputStyle}
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="Description"
      />
      <input
        className={inputStyle}
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="Amount"
      />
      <div className="flex justify-start items-center text-sm mb-1.5">
        <input
          type="radio"
          className="ml-2.5"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          id="expense"
          onChange={changeHandler}
        />
        <label className="ml-1 text-red-600" htmlFor="expense">
          Expense
        </label>
        <input
          type="radio"
          className="ml-2.5"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          id="income"
          onChange={changeHandler}
        />
        <label className="ml-1 text-green-700" htmlFor="income">
          Income
        </label>
      </div>
      <button
        className="btn py-2.5 text-white bg-[#6d28d9] hover:bg-[#7c3aed] duration-200"
        type="submit"
      >
        Add transaction
      </button>
    </form>
  );
};

export default FormAction;
