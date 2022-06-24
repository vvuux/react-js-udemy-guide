import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const initExpenseInputs = {
        id: '',
        title: '',
        amount: '',
        date: '',
    }
    const [expenseInputs, setExpenseInputs] = useState(initExpenseInputs)

    const inputChange = (e) => {
        setExpenseInputs({
            ...expenseInputs,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
        const inputData = {
            ...expenseInputs,
            date: new Date(expenseInputs.date)
        }
        console.log(inputData)
        props.onSaveExpenseData(inputData);
        setExpenseInputs(initExpenseInputs);
    }


    return (
        <form onSubmit={onSubmitHandle}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={expenseInputs.title} name="title" onChange={inputChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={expenseInputs.amount} name="amount" min="0.01" step="0.01" onChange={inputChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        value={expenseInputs.date} 
                        type="date" 
                        name="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={inputChange}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm