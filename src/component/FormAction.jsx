import { useState } from "react";

const FormAction = ({addTransaction}) => {

    const[formValues,setFormValues]=useState({type:"expense",amount:0,desc:""})

    const changeHandler =(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        addTransaction(formValues)
    }

    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc} />
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount}/>
            <div>
                <input type="radio" name="type" value="expense" checked={formValues.type==="expense"} id="" onChange={changeHandler} />
                <label htmlFor="">Expense</label>
                <input type="radio" name="type" value="income" checked={formValues.type==="income"} id="" onChange={changeHandler} />
                <label htmlFor="">Income</label>
            </div>
            <button type="submit">Add transaction</button>
        </form>
     );
}
 
export default FormAction;