import React, {useState} from "react";

import ExpensesChart from "../Expenses/ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList 
                    expenses={filteredExpenses}
                />
            </Card>
        </>
    )
}

export default Expenses