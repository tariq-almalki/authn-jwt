import { Container } from '../Container/Container.jsx';
import classes from './SignIn.module.css';

export function SignIn(props) {
    function SignInHandler() {
        props.onSignedUpHandler(props.isSignedUp ? false : true);
    }
    return (
        <Container>
            <form action='' className={classes.form}>
                <h1 className={classes.h1}>Sign In</h1>
                <p className={classes.p}>Wish you happy day!</p>
                <label htmlFor=''>
                    Email <br />
                    <input type='text' className={classes.input} required />
                </label>
                <label htmlFor=''>
                    Password <br />
                    <input type='text' className={classes.input} required />
                </label>
                <button type='submit' className={classes.button}>
                    Sign In
                </button>
            </form>
            <div>
                <p className={classes.p2}>Don't have an account? </p>
                <button className={classes.button2} onClick={SignInHandler}>
                    Sign Up
                </button>
            </div>
        </Container>
    );
}
