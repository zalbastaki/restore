import React, { Fragment, useState, useRef } from 'react';
import styled from 'styled-components';
import FloatingButton from './FloatingButton.component.js';
import MUSIC_ASSET from '../../assets/backgroundMusic.mp3';
import VOLUME_ICON from '../../assets/volume.png';
import VOLUME_OFF_ICON from '../../assets/volumeOff.png';

const Icon = styled.img`
    display: inline-block;
    width: 50%;
    height: auto;
    margin: auto;
`;

const muteProps = {
    src: VOLUME_ICON,
    alt: 'Mute',
    ariaLabel: 'Mute audio',
};

const unmuteProps = {
    src: VOLUME_OFF_ICON,
    alt: 'Un-mute',
    ariaLabel: 'Un-mute audio',
};

function Music(props) {
    const music = useRef(null);
    const [isMuted, setMuted] = useState(false);
    return (
        <Fragment>
            <FloatingButton
                size='sm'
                bottom
                left
                onClick={(event) => {
                    if (isMuted) {
                        music.current.play();
                    } else {
                        music.current.pause();
                    }
                    setMuted(!isMuted);
                }}
            >
                <Icon {...(isMuted ? unmuteProps : muteProps)} />
            </FloatingButton>

            <audio
                ref={music}
                src={MUSIC_ASSET}
                autoPlay
                loop
            />
        </Fragment>
    );
}

export default Music;
