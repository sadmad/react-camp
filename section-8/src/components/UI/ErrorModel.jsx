import Card from "./Card";
import classes from './ErrorModel.module.css';
import Button from "./Button";

const ErrorModel = (props) => {

    
    return(
        <>
        <div className={classes.backdrop} onClick={props.closeError} />
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.action}>
                <Button onClick={props.closeError} >bashe</Button>
            </footer>
        </Card>
        </>
    )
}

export default ErrorModel;
