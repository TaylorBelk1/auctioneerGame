import React from 'react';
import { connect } from 'react-redux';
import { HighBidWrap } from '../../styles/style';

const CurrentHigh = (props) => {
    return(
        <HighBidWrap>
            <h3>Current High Bid: </h3>
            <p>{props.currentHighBid}</p>
            {props.currentHighBidder.map(bidder => {
                return(
                <p key={bidder.id}>
                    High bidder: {bidder.displayName}
                </p>
            )})}

        </HighBidWrap>
    )
}

const mstp = state => {
    return {
        currentHighBid: state.currentHighBid,
        currentHighBidder: state.currentHighBidder
    }
  }

  export default connect(mstp, {})(CurrentHigh);