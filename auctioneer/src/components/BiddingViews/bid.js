import React from 'react';
import { connect } from 'react-redux';
import { InnerUserChat, Inputs } from '../../styles/style';
import LoadingSpinner from '../loading/loadingSpinner';

function BidOnItem(props) {

    return (
        <>
            {props.displayedMessage && props.biddingOnCurrent ?
                <InnerUserChat>
                    <h3>What would you like to bid?</h3>
                    <Inputs>
                        <input placeholder="bid goes here" disabled={props.timeLeft > 0 ? true : false}/>
                        <button disabled={props.timeLeft > 0 ? true : false}>Bid</button>
                    </Inputs>
                </InnerUserChat>
            :
                <InnerUserChat>
                    <LoadingSpinner />
                    <h3>Waiting for current bidding to finish....</h3>
                </InnerUserChat>
            }
        </>

    )
}

const mstp = state => {
  return {
    items: state.items,
    compPlayer: state.compPlayer,
    livePlayer: state.livePlayer,
    biddingOnCurrent: state.biddingOnCurrent,
    displayedMessage: state.displayedMessage,
    timeLeft: state.timeLeft
  }
}

export default connect(mstp, {})(BidOnItem);