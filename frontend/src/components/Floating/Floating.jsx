import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/react-dom';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import classes from './Floating.module.css';

export function Floating(props) {
    const [displayValue, setDisplayValue] = useState('none');
    const arrowRef = useRef();

    const {
        x,
        y,
        reference,
        floating,
        placement,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
        strategy,
    } = useFloating({
        placement: 'right',
        strategy: 'absolute',
        middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
        whileElementsMounted: autoUpdate,
    });

    const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    }[placement.split('-')[0]];

    function startDisplayHandler() {
        setDisplayValue('block');
    }

    function endDisplayHandler() {
        setDisplayValue('none');
    }

    return (
        <>
            <FontAwesomeIcon
                className={classes['fa-circle-exclamation']}
                icon={faCircleExclamation}
                ref={reference}
                onMouseEnter={startDisplayHandler}
                onFocus={startDisplayHandler}
                onMouseLeave={endDisplayHandler}
                onBlur={endDisplayHandler}
                beat
            />

            <div
                id='tooltip'
                className={classes.floating}
                ref={floating}
                style={{
                    display: displayValue,
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
            >
                {props.message.split('\\n').map((rule, index) => {
                    return (
                        <span key={index}>
                            {rule} <br />
                        </span>
                    );
                })}
                <div
                    id='arrow'
                    ref={arrowRef}
                    className={classes.arrow}
                    style={{
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: '-4px',
                    }}
                />
            </div>
        </>
    );
}
