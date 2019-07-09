import React from 'react';
import { connect } from 'react-redux';
import { InnerUserChat, Inputs } from '../../styles/style';
import loading from '../../assetts/load.png';

function BidOnItem(props) {
    return (
        <>
            {props.displayedMessage && props.biddingOnCurrent ?
                <InnerUserChat>
                    <h3>What would you like to bid?</h3>
                    <Inputs>
                        <input placeholder="bid goes here" />
                        <button>Bid</button>
                    </Inputs>
                </InnerUserChat>
            :
                <InnerUserChat>
                    <img src={loading} alt='loading' className='loading' />
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
    displayedMessage: state.displayedMessage
  }
}

export default connect(mstp, {})(BidOnItem);