import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = () => {
    const expenses = [
        {
          title: "Car Insuranse",
          date: new Date(2021, 2, 21),
          amount: 232.3
        },
        {
          title: "Food",
          date: new Date(2021, 3, 21),
          amount: 23.3
        },
        {
          title: "Car",
          date: new Date(2021, 5, 21),
          amount: 23244.3
        },
    ]
    return (
        <>
            <Card className="expenses">
                {expenses.map(expense => (
                    <ExpenseItem
                        expense={expense}
                    />
                ))}
            </Card>
        </>
    )
}

export default Expenses