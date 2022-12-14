import { Container } from '../../Container/Container.jsx';
import { motion } from 'framer-motion';
import { useRouteError } from 'react-router-dom';
import { Modal } from '../../Modal/Modal.jsx';
import { Overlay } from '../../Overlay/Overlay.jsx';
import { StyledGoBackLink } from '../../misc-components/StyledGoBackLink.jsx';

export function SignUpErrorElement() {
    const error = useRouteError();

    if (error.message && error.message.toLowerCase() === 'failed to fetch') {
        error.message = 'Error Occurred: Please Check if the API is UP';
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container>
                <Overlay>
                    <Modal>
                        {error.message}
                        <StyledGoBackLink to='/sign-up' />
                    </Modal>
                </Overlay>
            </Container>
        </motion.div>
    );
}
