import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ForgotPasswordLink = styled(Link)`
    color: #ffffff;
    width: fit-content;
    justify-self: end;
    align-self: flex-start;
    padding: 3px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0 0 3px black;
`;

export function StyledForgotPasswordLink(props) {
    return <ForgotPasswordLink to={props.to}>{props.children}</ForgotPasswordLink>;
}
