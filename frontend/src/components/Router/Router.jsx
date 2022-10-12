import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from '../SignIn/SignIn.jsx';
import { SignUp } from '../SignUp/SignUp.jsx';
import { Container } from '../Container/Container.jsx';
import { motion } from 'framer-motion';

export function Router() {
    // Actions
    // first executed on POST, PUT, DELETE, PATCH requests
    // doesn't get executed on GET requests
    // Actions are called whenever the app sends a non-get submission
    const action = async ({ request }) => {
        const data = Object.fromEntries(await request.formData());
        console.log(data);
    };

    // Loaders
    // first executed on GET requests
    // second executed on POST, PUT, DELETE, PATCH requests
    const loader = ({ request }) => {
        console.log('loader first');
    };

    const errorElement = (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <h1 style={{ color: 'red', fontWeight: 'bold' }}>Error Occurred</h1>
            </Container>
        </motion.div>
    );

    const router = createBrowserRouter([
        {
            path: '/',
            element: <SignUp />,
            action,
            loader,
            errorElement,
        },
        {
            path: '/signup',
            element: <SignUp />,
            action,
            loader,
            errorElement,
        },
        {
            path: '/signin',
            element: <SignIn />,
        },
    ]);

    return <RouterProvider router={router} />;
}
