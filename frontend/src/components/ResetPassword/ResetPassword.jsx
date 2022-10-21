import { motion } from 'framer-motion';
import { Container } from '../Container/Container.jsx';
import { Form } from 'react-router-dom';
import { StyledLink } from '../misc-components/StyledLink.jsx';
import classes from './ResetPassword.module.css';

export function ResetPassword() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Form action='/reset-password' method='post' className={classes.form}>
                    <div>
                        <h1 className={classes.h1}>Reset Password</h1>
                        <h5 style={{ color: 'white', textShadow: '0px 0px 3px black' }}>
                            We'll email you the instructions to reset your password
                        </h5>
                    </div>
                    <label htmlFor='email'>
                        Email
                        {/* you don't have to give it an htmlFor attribute if you nested input inside label */}
                        <input className={classes.input} type='text' id='email' name='email' placeholder='Email' />
                    </label>
                    <button className={classes.button} type='button'>
                        Reset Password
                    </button>
                </Form>
                <StyledLink style={{ marginTop: '10px' }} to='/sign-in'>
                    Return to login
                </StyledLink>
            </Container>
        </motion.div>
    );
}
