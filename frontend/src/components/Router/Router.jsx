import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from '../SignIn/SignIn.jsx';
import { SignUp } from '../SignUp/SignUp.jsx';
import { signUpAction } from './router-actions/signup.action.jsx';
import { signUpLoader } from './router-loaders/signup.loader.jsx';
import { SignUpErrorElement } from './router-errorElements/signup.errorElement.jsx';

import { ForgotPassword } from '../ForgotPassword/ForgotPassword.jsx';

// used only once
import { SuccessPage } from '../uonce-components/SuccessPage.jsx';

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
            path: '/sign-up',
            element: <SignUp />,
            action: signUpAction,
            loader: signUpLoader,
            errorElement: <SignUpErrorElement />,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />,
        },
        {
            path: '/success',
            element: <SuccessPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}
