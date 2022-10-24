import styled from 'styled-components';

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 125px;
    min-width: 250px;
    background-color: white;
    border-radius: 5px;
    border: 0.5px solid #333;
    padding: 10px;
    color: #ff3737;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Cairo', sans-serif;
`;

export function Modal(props) {
    return <StyledModal style={props.style}>{props.children}</StyledModal>;
}
