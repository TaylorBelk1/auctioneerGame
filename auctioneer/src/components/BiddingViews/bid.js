import React from 'react';
import { connect } from 'react-redux';
import { InnerUserChat, Inputs } from '../../styles/style';
import LoadingSpinner from '../loading/loadingSpinner';
import { SetPlayerBid } from '../../actions/action';

class BidOnItem extends React.Component {
    constructor() {
        super();
        this.state = {
            bid: ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleSubmit = (bid) => {
        this.props.SetPlayerBid(bid);
        // need method here to send bid back to parent
        // need method here to trigger bots to bid again
    }

    render() {
    return (
        <>
            {this.props.displayedMessage && this.props.biddingOnCurrent ?
                <InnerUserChat>
                    <h3>What would you like to bid?</h3>
                    {this.props.livePlayer.currentBid > 0 ?
                        <>
                            <p><b>Current Bid: </b></p>
                            <p>{this.props.livePlayer.currentBid}</p>
                        </> : <></>
                    }
                    <Inputs>
                        <input
                            name="bid"
                            onChange={this.handleChange}
                            value={this.state.bid}
                            placeholder="bid goes here"
                            disabled={this.props.timeLeft > 0 ? true : false}
                        />
                        <button
                            onClick={() => this.handleSubmit(this.state.bid)}
                            disabled={this.props.timeLeft > 0 ? true : false}>
                            Bid
                        </button>
                    </Inputs>
                </InnerUserChat>
            :
                <InnerUserChat>
                    <LoadingSpinner />
                    <h3>Waiting for current bidding to finish....</h3>
                </InnerUserChat>
            }
        </>

    )}
}

const mstp = state => {
  return {
    livePlayer: state.livePlayer,
    biddingOnCurrent: state.biddingOnCurrent,
    displayedMessage: state.displayedMessage,
    timeLeft: state.timeLeft
  }
}

export default connect(mstp, { SetPlayerBid })(BidOnItem);