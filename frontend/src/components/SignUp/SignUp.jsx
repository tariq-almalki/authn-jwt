import { StyledLink } from '../misc-components/StyledLink.jsx';
import classes from './SignUp.module.css';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';
import { Form } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function SignUp() {
    const [inputName, setInputName] = useState('');
    const [match, setMatch] = useState(null);

    function onBlurInputNameHandler(event) {
        const isMatch = /^[a-zA-Z -]{3,24}$/.test(event.target.value);
        setMatch(isMatch ? null : false);
    }

    function onFocusInputNameHandler(event) {
        const isMatch = /^[a-zA-Z -]{3,24}$/.test(event.target.value);
        setMatch(isMatch);
    }

    function onChangeInputNameHandler(event) {
        const isMatch = /^[a-zA-Z -]{3,24}$/.test(event.target.value);

        setMatch(isMatch);
        setInputName(event.target.value);
    }

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Container>
                    {/* inside of "SignUp" component it will point by default to "/signup" */}
                    {/* thus you don't have to include action='/signup' in "Form" component */}
                    <Form action='/signup' method='post' className={classes.form}>
                        <h1 className={classes.h1}>Sign Up</h1>
                        <p>it's free and only takes a minute</p>
                        <label className={classes.label}>
                            Name <br />
                            <input
                                type='text'
                                name='name'
                                value={inputName}
                                onBlur={onBlurInputNameHandler}
                                onFocus={onFocusInputNameHandler}
                                onChange={onChangeInputNameHandler}
                                className={`${classes.input} ${
                                    match === null ? '' : match ? classes['input-valid'] : classes['input-invalid']
                                }`}
                                minLength={3}
                                maxLength={15}
                                pattern='^[a-zA-Z \-]{3,24}$'
                                placeholder='name'
                                required
                            />
                            {match === null || match === true ? null : (
                                <FontAwesomeIcon
                                    className={classes['fa-circle-exclamation']}
                                    icon={faCircleExclamation}
                                    beat
                                />
                            )}
                        </label>
                        <label className={classes.label}>
                            Username <br />
                            <input
                                type='text'
                                name='username'
                                className={classes.input}
                                minLength={6}
                                maxLength={12}
                                placeholder='username'
                                required
                            />
                        </label>
                        <label className={classes.label}>
                            Email <br />
                            <input type='email' name='email' className={classes.input} placeholder='email' required />
                        </label>
                        <label className={classes.label}>
                            Password <br />
                            <input
                                type='password'
                                name='password'
                                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                                minLength={8}
                                maxLength={15}
                                className={`${classes.input} ${classes['input-password']}`}
                                placeholder='password'
                                required
                            />
                        </label>
                        <label className={classes.label}>
                            Confirm Password <br />
                            <input
                                type='password'
                                name='confirm-password'
                                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                                minLength={8}
                                maxLength={15}
                                className={`${classes.input} ${classes['input-password']}`}
                                placeholder='confirm password'
                                required
                            />
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
