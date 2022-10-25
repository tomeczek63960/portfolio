import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'

const StyledButton = styled.button.attrs((props: {ref: HTMLButtonElement}) => props)`
    position: relative;
    /* background: #7983ff; */
    border: 2px solid #7983ff;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    &:before {
        --size: 0;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, pink, transparent);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
    }
    span {
        position: relative;
    }
    &:hover:before {
        --size: 200px;
    }
`

function Button() {
    const btnRef = useRef<HTMLButtonElement>();
    useEffect(() => {
        btnRef.current?.addEventListener('mousemove', (e: any) => {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            btnRef.current?.style.setProperty('--x', x + 'px');
            btnRef.current?.style.setProperty('--y', y + 'px');
        });
    }, []);
  return (
    <StyledButton ref={btnRef}><span>Hover me</span></StyledButton>
  );
}

export default Button;
