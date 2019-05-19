import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 50px;
    height: 80%;
    background: #ddd;
    border: 5px solid white;
    border-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
`;

const OffsetIndicator = styled.div`
    width: 100%;
    height: ${({height}) => height};
    background: green;
    transition: 60s height;
    border-radius: 0 0 20px 20px;
`;

const AVERAGE_EMISSION = 20000;

function OffsetDisplay(props) {
    return (
        <Container>
            <OffsetIndicator 
                height={Math.min((props.value / AVERAGE_EMISSION) * 100, 100) + '%'}
            />
        </Container>
    );
}

export default OffsetDisplay;