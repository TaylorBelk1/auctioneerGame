import React from 'react';
import { PlayerCardWrap } from '../../styles/style';
import LoadingSpinner from '../loading/loadingSpinner';
import PlayerCards from './PlayerCards';
import { connect } from 'react-redux';

const BiddersArea = (props) => {
    return(
        <PlayerCardWrap>
            {props.currentBidders.length > 0 ?
             props.currentBidders.map(player => {
                return(
                    <PlayerCards
                        findHighestOverallBid={props.findHighestOverallBid}
                        players={player}
                        key={player.id}
                    />
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

const mstp = state => {
    return {
      currentBidders: state.currentBidders
    }
  }

  export default connect(mstp, {})(BiddersArea);