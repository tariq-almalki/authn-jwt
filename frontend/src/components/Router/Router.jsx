import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//
import { SignIn } from '../SignIn/SignIn.jsx';
import { signInAction } from './router-actions/signInAction.js';
import { SignInErrorElement } from './router-errorElements/SignInErrorElement.jsx';
//
import { SignUp } from '../SignUp/SignUp.jsx';
import { signUpAction } from './router-actions/signUpAction.js';
import { SignUpErrorElement } from './router-errorElements/SignUpErrorElement.jsx';

import { HomePage } from '../HomePage/HomePage.jsx';
import { HomePageErrorElement } from './router-errorElements/HomePageErrorElement.jsx';
import { homepageLoader } from './router-loaders/homepageLoader.js';
import { homepageAction } from './router-actions/homepageAction.js';

//
import { ResetPassword } from '../ResetPassword/ResetPassword.jsx';

// used only once
import { RedirectionPage } from '../RedirectionPage/RedirectionPage.jsx';

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
            action: signInAction,
            errorElement: <SignInErrorElement />,
        },
        {
            path: '/homepage',
            element: <HomePage />,
            errorElement: <HomePageErrorElement />,
            action: homepageAction,
            loader: homepageLoader,
        },
        {
            path: '/reset-password',
            element: <ResetPassword />,
        },
        {
            path: '/redirection',
            element: <RedirectionPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}
