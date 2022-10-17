import styled from 'styled-components';

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: fit-content;
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
    return <StyledModal>{props.children}</StyledModal>;
}
