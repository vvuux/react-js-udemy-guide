import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import "./NewExpense.css"

import ExpenseForm from "./ExpenseForm";
import AddExpenseConfirm from "./AddExpenseConfirm";

const NewExpense = (props) => {
    const [formActive, setFormActive] = useState(false);

    const saveExpenseData = (expenseDataInputs) => {
        const expenseData = {
            ...expenseDataInputs,
            id: uuidv4()
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }

    const viewMode = {}
    const editingMode = {}

    if (formActive){
        viewMode.display = 'none';
    }
    else{
        editingMode.display = 'none';
    }

    return (
        <div className="new-expense">
            <AddExpenseConfirm
                styles={viewMode}
                setFormActive={setFormActive}
            />
            <ExpenseForm 
                styles={editingMode}
                onSaveExpenseData={saveExpenseData}
                setFormActive={setFormActive}
            />
        </div>
    )
}

export default NewExpense