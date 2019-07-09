import React from 'react';
import { PlayerCard, BidAmount } from '../../styles/style';
import user from '../../assetts/user.png';
import { connect } from 'react-redux';

const PlayerCards = (props) => {
    console.log(props)
    return(
        <PlayerCard key={props.players.id}>
            <img src={user} alt='user logo' />
            <BidAmount>${props.players.currentBid}</BidAmount>
            <p>{props.players.displayName}</p>
        </PlayerCard>
    )
}

const mstp = state => {
    return {
      compPlayers: state.compPlayers,
      livePlayer: state.livePlayer
    }
  }

  export default connect(mstp, {})(PlayerCards);