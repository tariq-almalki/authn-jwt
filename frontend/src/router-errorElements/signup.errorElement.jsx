import { motion } from 'framer-motion';
import { Container } from '../components/Container/Container.jsx';

export const signUpErrorElement = (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Container>
            <h1 style={{ color: 'white', fontWeight: 'bold' }}>Error Occurred</h1>
        </Container>
    </motion.div>
);
