import { StyledLink } from '../misc-components/StyledLink.jsx';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';
import { Form } from 'react-router-dom';
import { StyledForgotPasswordLink } from '../misc-components/StyledForgotPasswordLink.jsx';
import classes from './SignIn.module.css';

export function SignIn() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Container>
                    {/* the component by default will point to "/sign-up" */}
                    {/* thus you don't have to include action='/sign-in' in "Form" component */}
                    <Form action='/sign-in' className={classes.form}>
                        <h1 className={classes.h1}>Sign In</h1>
                        <p className={classes.p}>Wish you happy day!</p>
                        <label htmlFor=''>
                            Email <br />
                            <input type='text' className={classes.input} required placeholder='Email' />
                        </label>
                        <label htmlFor=''>
                            Password <br />
                            <input type='text' className={classes.input} required placeholder='Password' />
                        </label>
                        <StyledForgotPasswordLink to='/reset-password'>Forgot Password?</StyledForgotPasswordLink>
                        <button type='submit' className={classes.button}>
                            Sign In
                        </button>
                    </Form>
                    <div>
                        <p className={classes.p2}>Don't have an account? </p>
                        <StyledLink to='/sign-up'>Sign Up</StyledLink>
                    </div>
                </Container>
            </motion.div>
        </>
    );
}
