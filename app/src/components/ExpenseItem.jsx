import React from "react";

import "./ExpenseItem.css";

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>March 28th, 2045</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$234.6</div>
            </div>
        </div>
    );
}

export default ExpenseItem