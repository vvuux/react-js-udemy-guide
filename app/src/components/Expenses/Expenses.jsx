import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');


    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js')
        console.log(selectedYear)
    }

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {props.expenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                    />
                ))}
            </Card>
        </>
    )
}

export default Expenses