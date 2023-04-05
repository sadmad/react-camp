import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  const expensesContent = <p>No Expense Found</p>;
 
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">{expensesContent}</h2>
  }
  return <ul className="expenses-list">
    {props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />))}</ul>
};

export default ExpensesList;
