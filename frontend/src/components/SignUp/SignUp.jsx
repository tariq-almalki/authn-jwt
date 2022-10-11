import { StyledLink } from '../misc-components/StyledLink.jsx';
import classes from './SignUp.module.css';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';
import { Form } from 'react-router-dom';

export function SignUp() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Container>
                    {/* inside of "SignUp" component it will point by default to "/signup" */}
                    {/* you don't have to include action='/signup' in "Form" component */}
                    <Form action='/signup' method='post' className={classes.form}>
                        <h1 className={classes.h1}>Sign Up</h1>
                        <p>it's free and only takes a minute</p>
                        <label className={classes.label}>
                            Name <br />
                            <input type='text' name='name' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Username <br />
                            <input type='text' name='username' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Email <br />
                            <input type='email' name='email' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Password <br />
                            <input type='password' name='password' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Confirm Password <br />
                            <input type='password' name='confirm-password' className={classes.input} required />
                        </label>
                        <button type='submit' className={classes.button}>
                            Sign Up
                        </button>
                    </Form>
                    <div>
                        <p className={classes.p2}>Already have an account? </p>
                        <StyledLink to='/signin'>Login here</StyledLink>
                    </div>
                </Container>
            </motion.div>
        </>
    );
}
