import React from 'react';
import { connect } from 'react-redux';
import { SetIsBidding } from '../../actions/action';
import { InnerUserChat, Buttons } from '../../styles/style';

function BidPrompt (props) {

    const handleClick = (bool) => {
        props.setBiddingStatus(bool)
    }

    return (
        <InnerUserChat>
            <h3>Do you want to bid on this item?</h3>
            <Buttons type="button" onClick={() => handleClick(true)}>Yes</Buttons>
            <Buttons type="button" onClick={() => handleClick(false)}>No</Buttons>
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