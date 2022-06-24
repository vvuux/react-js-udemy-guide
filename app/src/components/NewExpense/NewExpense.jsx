import React from "react";
import {v4 as uuidv4} from 'uuid';

import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseData = (expenseDataInputs) => {
        const expenseData = {
            ...expenseDataInputs,
            id: uuidv4()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    )
}

export default NewExpense