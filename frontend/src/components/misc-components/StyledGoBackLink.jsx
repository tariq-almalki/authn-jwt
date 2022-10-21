import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GoBackLink = styled(Link)`
    height: fit-content;
    width: fit-content;
    background-color: white;
    color: black;
    font-size: 12px;
    font-family: 'Cairo', sans-serif;
    font-weight: bold;
    padding: 3px;
    border: 0.5px solid #333;
    border-radius: 3px;
    transition: all 0.2s ease;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transform: scale(105%);
    }
`;

export function StyledGoBackLink(props) {
    return <GoBackLink to={props.to}>Go Back</GoBackLink>;
}
