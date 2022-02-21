import React from 'react';

import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
             
        };
        props.onAddExpense(expenseDate);

    };

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )

};

export default NewExpense;