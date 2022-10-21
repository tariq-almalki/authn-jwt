import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ResetPasswordLink = styled(Link)``;

export function StyledResetPasswordLink(props) {
    return <ResetPasswordLink to={props.to}>{props.children}</ResetPasswordLink>;
}
