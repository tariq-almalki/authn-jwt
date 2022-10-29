import { bubble as Menu } from 'react-burger-menu';

let styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: '#ffffff',
    },
    bmBurgerBarsHover: {
        background: '#a90000',
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: '#ffffff',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
    },
    bmMenu: {
        background: 'rgb(64, 64, 255)',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    bmMorphShape: {
        fill: 'rgb(64, 64, 255)',
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmItem: {
        display: 'inline-block',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
    },
};

export function BubbleMenu(props) {
    return <Menu styles={styles}>{props.children}</Menu>;
}
