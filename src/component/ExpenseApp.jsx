import { useState } from "react";
import Transaction from "./Transaction";
import OverView from "./OverView";

const ExpenseApp = () => {

    const[expense,setExpense]=useState(0)
    const[income,setIncome]=useState(0)
    const[transaction,setTransaction]=useState([])

    const addTransaction =(formValue)=>{
        console.log(formValue);
        setTransaction([...transaction,{...formValue,id:Date.now()}])
    }

    return ( 
        <section className="flex flex-col w-80 bg-white border border-gray-200 rounded-md p-3 ">
        <OverView expense={expense} income={income} addTransaction={addTransaction}/>
        <Transaction transaction={transaction}/>
        </section>
     );
}
 
export default ExpenseApp;