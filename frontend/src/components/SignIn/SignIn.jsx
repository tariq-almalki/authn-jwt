import { StyledLink } from '../misc-components/StyledLink.jsx';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';
import { Form } from 'react-router-dom';
import classes from './SignIn.module.css';

export function SignIn() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Container>
                    {/* the component by default will point to "/signup" */}
                    {/* thus you don't have to include action='/signin' in "Form" component */}
                    <Form action='/signin' className={classes.form}>
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
                    </Form>
                    <div>
                        <p className={classes.p2}>Don't have an account? </p>
                        <StyledLink to='/signup'>Sign Up</StyledLink>
                    </div>
                </Container>
            </motion.div>
        </>
    );
}
