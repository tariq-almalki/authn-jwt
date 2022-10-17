import { StyledLink } from '../misc-components/StyledLink.jsx';
import classes from './SignUp.module.css';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';
import { Form, useNavigation } from 'react-router-dom';
import { Floating } from '../Floating/Floating.jsx';
import { useState } from 'react';
import { useLocalStorage } from '../Hooks/useLocalStorage.jsx';
import ClipLoader from 'react-spinners/ClipLoader';

export function SignUp() {
    console.log('sign up');

    // useState
    const [inputName, setInputName] = useLocalStorage('name', '');
    const [inputUsername, setInputUsername] = useLocalStorage('username', '');
    const [inputEmail, setInputEmail] = useLocalStorage('email', '');
    const [inputPassword, setInputPassword] = useState('');
    const [inputCPassword, setInputCPassword] = useState('');
    const [matchName, setMatchName] = useState(null);
    const [matchUsername, setMatchUsername] = useState(null);
    const [matchEmail, setMatchEmail] = useState(null);
    const [matchPassword, setMatchPassword] = useState(null);
    const [matchCPassword, setMatchCPassword] = useState(null);
    const [isPasswordMatch, setIsPasswordMatch] = useState(null);

    // useNavigation
    const navigation = useNavigation();
    // prettier-ignore
    const signUpButton = navigation.state === 'idle' ? 'Sign Up' : <ClipLoader color='#fff' size={26} speedMultiplier={0.5} />;
    const disabled = navigation.state === 'idle' ? false : true;
    const type = navigation.state === 'idle' ? 'submit' : 'button';

    function onInputNameHandler(event) {
        const pattern = new RegExp(event.target.pattern);
        const isMatch = pattern.test(event.target.value);

        if (event.type === 'blur') {
            return setMatchName(isMatch ? null : false);
        }

        setMatchName(isMatch);

        if (event.type === 'change') {
            setInputName(event.target.value);
        }
    }

    function onInputUsernameHandler(event) {
        const pattern = new RegExp(event.target.pattern);
        const isMatch = pattern.test(event.target.value);

        if (event.type === 'blur') {
            return setMatchUsername(isMatch ? null : false);
        }

        setMatchUsername(isMatch);

        if (event.type === 'change') {
            setInputUsername(event.target.value);
        }
    }

    function onInputEmailHandler(event) {
        const pattern = new RegExp(event.target.pattern);
        const isMatch = pattern.test(event.target.value);

        if (event.type === 'blur') {
            return setMatchEmail(isMatch ? null : false);
        }

        setMatchEmail(isMatch);

        if (event.type === 'change') {
            setInputEmail(event.target.value);
        }
    }

    function onInputPasswordHandler(event) {
        const pattern = new RegExp(event.target.pattern);
        const isMatch = pattern.test(event.target.value);

        if (event.type === 'blur') {
            return setMatchPassword(isMatch ? null : false);
        }

        setMatchPassword(isMatch);

        if (event.type === 'change') {
            setInputPassword(event.target.value);
        }

        const cPassword = event.target.form[4].value.trim();
        const password = event.target.value.trim();
        const isPasswordMatch = password === cPassword;
        setIsPasswordMatch(isPasswordMatch);

        if (isMatch) {
            setIsPasswordMatch(isPasswordMatch);
        }
    }

    function onInputCPasswordHandler(event) {
        const pattern = new RegExp(event.target.pattern);
        const isMatch = pattern.test(event.target.value);

        if (event.type === 'blur') {
            return setMatchCPassword(isMatch ? null : false);
        }

        setMatchCPassword(isMatch);

        if (event.type === 'change') {
            setInputCPassword(event.target.value);
        }

        const cPassword = event.target.form[3].value.trim();
        const password = event.target.value.trim();
        const isPasswordMatch = password === cPassword;

        if (isMatch) {
            setIsPasswordMatch(isPasswordMatch);
        }
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
                                id='name'
                                type='text'
                                name='name'
                                value={inputName}
                                onBlur={onInputNameHandler}
                                onFocus={onInputNameHandler}
                                onChange={onInputNameHandler}
                                disabled={disabled}
                                className={`${classes.input} ${
                                    matchName === null
                                        ? ''
                                        : matchName
                                        ? classes['input-valid']
                                        : classes['input-invalid']
                                }`}
                                minLength={3}
                                maxLength={15}
                                pattern='^[a-zA-Z]{3,}[ ]?([a-zA-Z]+)?$'
                                placeholder='name'
                                required
                            />
                            {matchName === null || matchName === true ? null : (
                                <Floating
                                    message='- Name Required 
                                                \n- only lowercase/uppercase characters
                                                \n- must be at least 3 characters
                                                \n- must be at most 15 characters'
                                />
                            )}
                        </label>
                        <label className={classes.label}>
                            Username <br />
                            <input
                                id='username'
                                type='text'
                                name='username'
                                value={inputUsername}
                                onBlur={onInputUsernameHandler}
                                onFocus={onInputUsernameHandler}
                                onChange={onInputUsernameHandler}
                                disabled={disabled}
                                className={`${classes.input} ${
                                    matchUsername === null
                                        ? ''
                                        : matchUsername
                                        ? classes['input-valid']
                                        : classes['input-invalid']
                                }`}
                                pattern='^[a-zA-Z][a-zA-Z0-9-_\.]{5,12}$'
                                minLength={6}
                                maxLength={12}
                                placeholder='username'
                                required
                            />
                            {matchUsername === null || matchUsername === true ? null : (
                                <Floating
                                    message='- Username Required 
                                                \n- must not start with a digit
                                                \n- only lowercase/uppercase characters and digits
                                                \n- must be at least 6 characters
                                                \n- must be at most 12 characters'
                                />
                            )}
                        </label>
                        <label className={classes.label}>
                            Email <br />
                            <input
                                id='email'
                                type='email'
                                name='email'
                                value={inputEmail}
                                onBlur={onInputEmailHandler}
                                onFocus={onInputEmailHandler}
                                onChange={onInputEmailHandler}
                                disabled={disabled}
                                className={`${classes.input} ${
                                    matchEmail === null
                                        ? ''
                                        : matchEmail
                                        ? classes['input-valid']
                                        : classes['input-invalid']
                                }`}
                                pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                                placeholder='email'
                                required
                            />
                            {matchEmail === null || matchEmail === true ? null : (
                                <Floating
                                    message='- Email Required 
                                                    \n- it should be in this format example@example.com'
                                />
                            )}
                        </label>
                        <label className={classes.label}>
                            Password <br />
                            <input
                                id='password'
                                type='password'
                                name='password'
                                value={inputPassword}
                                onBlur={onInputPasswordHandler}
                                onFocus={onInputPasswordHandler}
                                onChange={onInputPasswordHandler}
                                disabled={disabled}
                                className={`${classes.input} ${
                                    matchPassword === null
                                        ? ''
                                        : matchPassword && isPasswordMatch
                                        ? classes['input-valid']
                                        : classes['input-invalid']
                                }`}
                                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                                minLength={8}
                                maxLength={15}
                                placeholder='password'
                                required
                            />
                            {matchPassword === null || matchPassword === true ? null : (
                                <Floating
                                    message='- Password Required
                                                    \n- must contain 1 Uppercase character
                                                    \n- must contain 1 Lowercase character
                                                    \n- must contain 1 number
                                                    \n- must be at least 8 characters
                                                    \n- must be at most 15 characters'
                                />
                            )}
                            {isPasswordMatch !== true && matchPassword === true ? (
                                <Floating message="- Passwords doesn't match" />
                            ) : null}
                        </label>
                        <label className={classes.label}>
                            Confirm Password <br />
                            <input
                                id='cpassword'
                                type='password'
                                name='cpassword'
                                value={inputCPassword}
                                onBlur={onInputCPasswordHandler}
                                onFocus={onInputCPasswordHandler}
                                onChange={onInputCPasswordHandler}
                                disabled={disabled}
                                className={`${classes.input} ${
                                    matchCPassword === null
                                        ? ''
                                        : matchCPassword && isPasswordMatch
                                        ? classes['input-valid']
                                        : classes['input-invalid']
                                }`}
                                pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
                                minLength={8}
                                maxLength={15}
                                placeholder='confirm password'
                                required
                            />
                            {matchCPassword === null || matchCPassword === true ? null : (
                                <Floating
                                    message='- Confirm Password Required
                                                    \n- must contain 1 Uppercase character
                                                    \n- must contain 1 Lowercase character
                                                    \n- must contain 1 number
                                                    \n- must be at least 8 characters
                                                    \n- must be at most 15 characters'
                                />
                            )}
                            {isPasswordMatch !== true && matchCPassword === true ? (
                                <Floating message="- Passwords doesn't match" />
                            ) : null}
                        </label>
                        <button
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            type={type}
                            className={classes.button}
                        >
                            {signUpButton}
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
