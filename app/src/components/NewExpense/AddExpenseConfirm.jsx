import React from "react";

const AddExpenseConfirm = (props) => {
    const buttonClickHandler = () => {
        props.setFormActive(true);
    }

    return (
        <div>
            <button 
                onClick={buttonClickHandler}
                style={props.styles}
                >Add New Expense</button>
        </div>
    )
}

export default AddExpenseConfirm;