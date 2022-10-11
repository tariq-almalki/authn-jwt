import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from './components/SignIn/SignIn.jsx';
import { SignUp } from './components/SignUp/SignUp.jsx';
import { Container } from './components/Container/Container.jsx';
import { motion } from 'framer-motion';
import './base-styles.css';

const action = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    console.log(data);
};

const errorElement = (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Container>
            <h1 style={{ color: 'white' }}>Error</h1>
        </Container>
    </motion.div>
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp />,
        action,
        errorElement,
    },
    {
        path: '/signup',
        element: <SignUp />,
        action,
        errorElement,
    },
    {
        path: '/signin',
        element: <SignIn />,
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
