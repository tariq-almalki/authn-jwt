import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from './components/SignIn/SignIn.jsx';
import { SignUp } from './components/SignUp/SignUp.jsx';
import './base-styles.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
