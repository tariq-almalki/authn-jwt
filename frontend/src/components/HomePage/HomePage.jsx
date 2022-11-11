/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from '../Container/Container.jsx';
import { BubbleMenu } from '../BubbleMenu/BubbleMenu.jsx';
import classes from './HomePage.module.css';
import { useReducer } from 'react';
import { useLoaderData, Form } from 'react-router-dom';
import logoutIcon from '../../images/logout.png';

const initialState = {
    styles: {
        color: 'transparent',
        textShadow: '0 0 8px rgba(0,0,0,1)',
        backgroundColor: 'white',
        resize: 'none',
    },
    isRevealed: false,
    text: 'Show Hashed Password',
};

function textareaReducer(state, action) {
    if (action.boolean) {
        return {
            styles: { color: 'black', backgroundColor: 'white', resize: 'none' },
            isRevealed: !state.isRevealed,
            text: 'Hide Hashed Password',
        };
    }

    return {
        styles: {
            color: 'transparent',
            textShadow: '0 0 8px rgba(0,0,0,1)',
            backgroundColor: 'white',
            resize: 'none',
        },
        isRevealed: !state.isRevealed,
        text: 'Show Hashed Password',
    };
}

export function HomePage() {
    const [textareaState, textareaStateDispatch] = useReducer(textareaReducer, initialState);
    const formData = useLoaderData();

    function onRevealHandler() {
        textareaStateDispatch({
            boolean: !textareaState.isRevealed,
        });
    }

    return (
        <>
            <BubbleMenu>
                <Form method='POST' action='/homepage'>
                    <button className={classes['logout-button']} type='submit'>
                        <img className={classes.img} src={logoutIcon} height={24} width={24} alt='' />
                        Logout
                    </button>
                </Form>
            </BubbleMenu>
            <Container>
                <div className={classes.squircle}>
                    <h1>Homepage</h1>
                    <input className={classes.input} type='text' name='name' value={formData.name} disabled />
                    <input className={classes.input} type='text' name='username' value={formData.username} disabled />
                    <input className={classes.input} type='text' name='email' value={formData.email} disabled />
                    <textarea
                        name='password'
                        style={textareaState.styles}
                        value={formData.password}
                        disabled
                        readOnly
                        cols='30'
                        rows='5'
                    ></textarea>
                    <button className={classes.button} type='button' onClick={onRevealHandler}>
                        {textareaState.text}
                    </button>
                </div>
            </Container>
        </>
    );
}
