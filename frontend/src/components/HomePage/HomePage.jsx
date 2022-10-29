import { Container } from '../Container/Container.jsx';
import { BubbleMenu } from '../BubbleMenu/BubbleMenu.jsx';
import classes from './HomePage.module.css';
import { useReducer } from 'react';
import { useLoaderData } from 'react-router-dom';

const initialState = {
    styles: {
        color: 'transparent',
        'text-shadow': '0 0 8px rgba(0,0,0,1)',
        'background-color': 'white',
        resize: 'none',
    },
    isRevealed: false,
    text: 'Show Password',
};

function textareaReducer(state, action) {
    if (action.boolean) {
        return {
            styles: { color: 'black', 'background-color': 'white', resize: 'none' },
            isRevealed: !state.isRevealed,
            text: 'Hide Password',
        };
    }

    return {
        styles: {
            color: 'transparent',
            'text-shadow': '0 0 8px rgba(0,0,0,1)',
            'background-color': 'white',
            resize: 'none',
        },
        isRevealed: !state.isRevealed,
        text: 'Show Password',
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
            <BubbleMenu />
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
