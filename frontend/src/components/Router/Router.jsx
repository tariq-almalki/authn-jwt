import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from '../SignIn/SignIn.jsx';
import { SignUp } from '../SignUp/SignUp.jsx';
import { signUpAction } from './router-actions/sign-up.action.jsx';
import { SignUpErrorElement } from './router-errorElements/sign-up.errorElement.jsx';

import { ResetPassword } from '../ResetPassword/ResetPassword.jsx';

// used only once
import { SuccessPage } from '../uonce-components/SuccessPage.jsx';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <SignUp />,
            action: signUpAction,
            errorElement: <SignUpErrorElement />,
        },
        {
            path: '/sign-up',
            element: <SignUp />,
            action: signUpAction,
            errorElement: <SignUpErrorElement />,
        },
        {
            path: '/sign-in',
            element: <SignIn />,
        },
        {
            path: '/reset-password',
            element: <ResetPassword />,
        },
        {
            path: '/success',
            element: <SuccessPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}
