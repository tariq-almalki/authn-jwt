import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from '../SignIn/SignIn.jsx';
// 
import { SignUp } from '../SignUp/SignUp.jsx';
import { signUpErrorElement } from '../../router-errorElements/signup.errorElement.jsx';
import { signUpAction } from '../../router-actions/signup.action.jsx';
import { signUpLoader } from '../../router-loaders/signup.loader.jsx';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <SignUp />,
            action: signUpAction,
            loader: signUpLoader,
            errorElement: signUpErrorElement,
        },
        {
            path: '/signup',
            element: <SignUp />,
            action: signUpAction,
            loader: signUpLoader,
            errorElement: signUpErrorElement,
        },
        {
            path: '/signin',
            element: <SignIn />,
        },
    ]);

    return <RouterProvider router={router} />;
}
