import { SignUp } from './SignUp/SignUp.jsx';
import { SignIn } from './SignIn/SignIn.jsx';
import './App.css';
import { useState } from 'react';

export function App() {
    const [isSignedUp, setIsSignedUp] = useState(false);

    function isSignedUpHandler(answer) {
        setIsSignedUp(answer);
    }

    return isSignedUp ? (
        <SignIn isSignedUp={isSignedUp} onSignedUpHandler={isSignedUpHandler} />
    ) : (
        <SignUp isSignedUp={isSignedUp} onSignedUpHandler={isSignedUpHandler} />
    );
}
