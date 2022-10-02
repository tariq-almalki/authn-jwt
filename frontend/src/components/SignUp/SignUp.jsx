import { Container } from '../Container/Container.jsx';
import classes from './SignUp.module.css';

export function SignUp(props) {
    function SignUpHandler() {
        props.onSignedUpHandler(props.isSignedUp ? false : true);
    }
    return (
        <Container>
            <form action='' className={classes.form}>
                <h1 className={classes.h1}>Sign Up</h1>
                <p>it's free and only takes a minute</p>
                <label className={classes.label}>
                    Name <br />
                    <input type='text' className={classes.input} />
                </label>
                <label className={classes.label}>
                    Username <br />
                    <input type='text' className={classes.input} />
                </label>
                <label className={classes.label}>
                    Email <br />
                    <input type='text' className={classes.input} />
                </label>
                <label className={classes.label}>
                    Password <br />
                    <input type='text' className={classes.input} />
                </label>
                <label className={classes.label}>
                    Confirm Password <br />
                    <input type='text' className={classes.input} />
                </label>
                <button className={classes.button}>Sign Up</button>
            </form>
            <div>
                <p className={classes.p2}>Already have an account? </p>
                <button className={classes.button2} onClick={SignUpHandler}>
                    Login here
                </button>
            </div>
        </Container>
    );
}
