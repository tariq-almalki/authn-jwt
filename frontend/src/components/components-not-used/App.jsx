import { Container } from '../Container/Container.jsx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// NOT USED

const Div = styled.div`
    display: grid;
    grid-template-rows: 200px 100px;
    grid-template-columns: repeat(2, 125px);
    justify-content: center;
    align-items: center;

    height: 300px;
    width: 250px;

    backdrop-filter: blur(6px) saturate(166%);
    -webkit-backdrop-filter: blur(6px) saturate(166%);
    background-color: rgba(255, 255, 255, 0.69);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
`;

const HomePage = styled.div`
    justify-self: center;
    grid-column-start: span 2;

    font-size: 36px;
    font-family: 'Cairo', sans-serif;
`;

const StyledLink = styled(Link)`
    justify-self: center;

    color: black;
    height: fit-content;
    width: 60px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Cairo', sans-serif;
    text-decoration: none;
    text-align: center;

    backdrop-filter: blur(6px) saturate(166%);
    -webkit-backdrop-filter: blur(6px) saturate(166%);
    background-color: rgba(255, 255, 255, 0);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    transition: all 0.5s ease;

    &:hover {
        box-shadow: 0px 0px 7px -3px black;
    }
`;

export function App() {
    return (
        <Container>
            <Div>
                <HomePage>Home Page</HomePage>
                <StyledLink to='/signup'>SignUp</StyledLink>
                <StyledLink to='/signin'>SignIn</StyledLink>
            </Div>
        </Container>
    );
}
