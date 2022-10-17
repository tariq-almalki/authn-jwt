import styled from 'styled-components';

const StyledOverlay = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
`;

export function Overlay(props) {
    return <StyledOverlay>{props.children}</StyledOverlay>;
}
