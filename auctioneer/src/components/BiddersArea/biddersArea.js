import React from 'react';
import { PlayerCardWrap } from '../../styles/style';
import LoadingSpinner from '../loading/loadingSpinner';
import PlayerCards from './PlayerCards';

const BiddersArea = (props) => {
    return(
        <PlayerCardWrap>
            {props.players.length > 0 ?
             props.players.map(player => {
                return(
                    <PlayerCards players={player} key={player.id}/>
                )
            }) :
            <div>
                <span>Waiting for Players...</span><br />
                <LoadingSpinner />
            </div>
            }
        </PlayerCardWrap>
    )
}

export default BiddersArea