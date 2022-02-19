import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';


const NewExpense = (props) => {

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
             
        };
        props.onaddExpense(expenseDate);

    };

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    )

};

export default NewExpense;