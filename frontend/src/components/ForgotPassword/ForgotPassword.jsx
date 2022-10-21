import { motion } from 'framer-motion';
import { Container } from '../Container/Container.jsx';
import { Form } from 'react-router-dom';

export function ForgotPassword() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Form>
                    <label htmlFor='email'>
                        {/* you don't have to give it an htmlFor attribute if you nested input inside label */}
                        <input type='text' id='email' name='email' />
                    </label>
                    <button type='button'></button>
                </Form>
            </Container>
        </motion.div>
    );
}
