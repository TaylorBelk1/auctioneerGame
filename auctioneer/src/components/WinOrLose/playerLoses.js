import React from 'react';
import { EndOfRoundWrap, WinLoseWrap } from '../../styles/style';
import lose from '../../assetts/lose.png';

const PlayerLoses = () => {
    return(
        <EndOfRoundWrap>
            <WinLoseWrap>
                <p>You lost this round!</p>
                <img src={lose} alt='party' width="96px"/><br / >
                <button>Next Round</button>
            </WinLoseWrap>
        </EndOfRoundWrap>
    )
}

export default PlayerLoses