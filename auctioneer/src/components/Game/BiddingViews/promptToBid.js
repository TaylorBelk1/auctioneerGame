import React from 'react';
import { connect } from 'react-redux';
import { SetIsBidding } from '../../../actions/action';
import { InnerUserChat, Buttons } from '../../../styles/style';

const BidPrompt = (props) => {

    return (
        <InnerUserChat>
            <h3>Are you ready?</h3>
            <Buttons type="button" onClick={() => props.setBiddingStatus()}>Let's do this!</Buttons>
        </InnerUserChat>
    );
}

const mstp = state => {
  return {
    items: state.items,
    compPlayer: state.compPlayer,
    livePlayer: state.livePlayer,
    biddingOnCurrent: state.biddingOnCurrent
  }
}

export default connect(mstp, {SetIsBidding})(BidPrompt);