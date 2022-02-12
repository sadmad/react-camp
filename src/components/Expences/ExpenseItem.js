import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    //const expenseDate = new Date(2021, 2, 28);
    //const expenseTitle = "Car Insurance";
    //const expenseAmoun = 294.67;
    //
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => { 
        setTitle('Updated!') 
    };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;