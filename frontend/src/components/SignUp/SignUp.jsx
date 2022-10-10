import { StyledLink } from '../misc-components/StyledLink.jsx';
import classes from './SignUp.module.css';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';

export function SignUp() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Container>
                    <form action='' className={classes.form}>
                        <h1 className={classes.h1}>Sign Up</h1>
                        <p>it's free and only takes a minute</p>
                        <label className={classes.label}>
                            Name <br />
                            <input type='text' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Username <br />
                            <input type='text' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Email <br />
                            <input type='email' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Password <br />
                            <input type='password' className={classes.input} required />
                        </label>
                        <label className={classes.label}>
                            Confirm Password <br />
                            <input type='password' className={classes.input} required />
                        </label>
                        <button type='submit' className={classes.button}>
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <p className={classes.p2}>Already have an account? </p>
                        <StyledLink to='/signin'>Login here</StyledLink>
                    </div>
                </Container>
            </motion.div>
        </>
    );
}
