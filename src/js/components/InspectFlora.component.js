import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid white;
    border-radius: 5px;
    background: #dddddd;
    width: 200px;
    height: 30px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
`;

const Progress = styled.div`
    width: ${({ width }) => width};
    background: ${({ width }) => width === '100%' ? 'lime' : 'skyblue'};
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
`;

const Information = styled.span`
    color: black;
    justify-self: center;
    align-self: center;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
`;

function elapsed(from, to) {
    const dt = to - from;
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    if (dt < MINUTE) {
        return Math.ceil(dt / SECOND) + ' seconds';
    }
    if (dt < HOUR) {
        return Math.ceil(dt / MINUTE) + ' minutes';
    }
    if (dt < DAY) {
        return Math.ceil(dt / HOUR) + ' hours';
    }
    return Math.ceil(dt / DAY) + ' days';
}

class InspectFlora extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            if (this.props.value) {
                this.forceUpdateInterval = setInterval(this.forceUpdate.bind(this), 1000);
            } else {
                clearInterval(this.forceUpdateInterval);
            }
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }
    
    render() {
        const sprite = this.props.value;
        if (!sprite) {
            return null;
        }
        const progress = sprite.getGrowthProgress();
        const matureAt = sprite.state.plantedAt + sprite.props.growsIn;
        const isMature = progress === 1;
        return (
            <Container>
                <Progress width={(progress * 100) + '%'} />
                {!isMature && (
                    <Information>{elapsed(Date.now(), matureAt)}</Information>
                )}
                {isMature && (
                    <Information>Ready!</Information>
                )}
            </Container>
        );
    }
}

export default InspectFlora;
