import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from '../SignIn/SignIn.jsx';
import { SignUp } from '../SignUp/SignUp.jsx';
import { signUpAction } from './router-actions/signup.action.jsx';
import { signUpLoader } from './router-loaders/signup.loader.jsx';
import { SignUpErrorElement } from './router-errorElements/signup.errorElement.jsx';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <SignUp />,
            action: signUpAction,
            loader: signUpLoader,
            errorElement: <SignUpErrorElement />,
        },
        {
            path: '/signup',
            element: <SignUp />,
            action: signUpAction,
            loader: signUpLoader,
            errorElement: <SignUpErrorElement />,
        },
        {
            path: '/signin',
            element: <SignIn />,
        },
    ]);

    return <RouterProvider router={router} />;
}
