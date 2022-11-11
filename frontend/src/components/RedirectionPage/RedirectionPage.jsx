import { Container } from '../Container/Container.jsx';
import { Overlay } from '../Overlay/Overlay.jsx';
import { Modal } from '../Modal/Modal.jsx';
// import { GoBackLink } from '../misc-components/StyledGoBackLink.jsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function RedirectionPage() {
    const [counter, setCounter] = useState(3);
    const navigate = useNavigate();

    localStorage.removeItem('name');
    localStorage.removeItem('username');
    localStorage.removeItem('email');

    // for automatic redirection
    useEffect(() => {
        setTimeout(() => {
            if (counter === 0) {
                return navigate('/sign-in');
            }
            setCounter(counter - 1);
        }, 1000);
    }, [counter, navigate]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Overlay>
                    <Modal style={{ justifyContent: 'center' }}>
                        <span style={{ color: '#000' }}>Success</span>
                        <span style={{ color: '#000' }}>redirect after {counter}</span>
                    </Modal>
                </Overlay>
            </Container>
        </motion.div>
    );
}
