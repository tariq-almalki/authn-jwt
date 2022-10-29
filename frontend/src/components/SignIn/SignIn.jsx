import { StyledLink } from '../misc-components/StyledLink.jsx';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';
import { Form, useNavigation } from 'react-router-dom';
import { StyledForgotPasswordLink } from '../misc-components/StyledForgotPasswordLink.jsx';
import classes from './SignIn.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

export function SignIn() {
    // useNavigation
    const navigation = useNavigation();
    // prettier-ignore
    const signUpButton = navigation.state === 'idle' ? 'Sign In' : <ClipLoader color='#fff' size={27} speedMultiplier={0.5} />;
    const disabled = navigation.state === 'idle' ? false : true;
    const type = navigation.state === 'idle' ? 'submit' : 'button';

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Container>
                    {/* the component by default will point to "/sign-in" */}
                    {/* thus you don't have to include action='/sign-in' in "Form" component */}
                    <Form action='/sign-in' method='post' className={classes.form}>
                        <h1 className={classes.h1}>Sign In</h1>
                        <p className={classes.p}>Wish you happy day!</p>
                        <label htmlFor=''>
                            Email <br />
                            <input
                                type='email'
                                name='email'
                                className={classes.input}
                                required
                                placeholder='Email'
                                disabled={disabled}
                            />
                        </label>
                        <label htmlFor=''>
                            Password <br />
                            <input
                                type='password'
                                name='password'
                                className={classes.input}
                                required
                                placeholder='Password'
                                disabled={disabled}
                            />
                        </label>
                        <StyledForgotPasswordLink to='/reset-password'>Forgot Password?</StyledForgotPasswordLink>
                        <button type={type} className={classes.button}>
                            {signUpButton}
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
