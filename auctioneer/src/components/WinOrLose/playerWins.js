import React from 'react';
import { EndOfRoundWrap, WinLoseWrap } from '../../styles/style';
import win from '../../assetts/win.png';

const PlayerWins = (props) => {

    // method to reset all state, add current item to soldItems and remove it from available items

    return(
        <EndOfRoundWrap>
            <WinLoseWrap>
                <p>You won this round!</p>
                <img src={win} alt='party' width="96px"/><br / >
                <button>Next Round</button>
            </WinLoseWrap>
        </EndOfRoundWrap>
    )
}

export default PlayerWins