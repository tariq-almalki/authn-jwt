import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForgotPasswordLink = styled(Link)`
    color: #ffffff;
    width: fit-content;
    justify-self: end;
    align-self: flex-start;
    padding: 3px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
`;

export function ForgotPasswordLink(props) {
    return <StyledForgotPasswordLink to={props.to}>{props.children}</StyledForgotPasswordLink>;
}
