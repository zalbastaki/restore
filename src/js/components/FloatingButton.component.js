import styled from 'styled-components';

const FloatingButton = styled.button`
    position: absolute;
    padding: 0;
    margin: 0;
    display: inline-grid;
    place-items: center center;
    background: ${({ background }) => background};
    border-radius: 50%;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
        0px 6px 10px 0px rgba(0,0,0,0.14),
        0px 1px 18px 0px rgba(0,0,0,0.12);
    cursor: pointer;
    outline: none;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform: scale(1);
    ${({ top }) => top && `top: 24px;`}
    ${({ right }) => right && `right: 24px;`}
    ${({ bottom }) => bottom && `bottom: 24px;`}
    ${({ left }) => left && `left: 24px;`}
    width: ${size};
    height: ${size};

    &:hover {
        transform: scale(1.25);
    }
`;

function size({ size }) {
    return {
        lg: '96px',
        sm: '48px',
    }[size]
}

FloatingButton.defaultProps = {
    size: 'lg',
    background: 'white',
    bottom: true,
    right: true,
};

export default FloatingButton;
