import React from 'react';
import { connect } from 'react-redux';
import { InnerUserChat, Inputs } from '../../styles/style';
import LoadingSpinner from '../loading/loadingSpinner';
import { SetPlayerBid, SetOverallHighest, AddToBidsArray } from '../../actions/action';

class BidOnItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bid: ""
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleKeyUp = e => {
        if(e.key === 'Enter') {
            this.handleSubmit(this.state.bid)
        }
    }

    handleSubmit = (bid) => {
        bid = parseInt(bid);
        this.props.SetPlayerBid(bid);
        this.props.AddToBidsArray(bid);
        setTimeout(() => {
            this.props.findHighestOverallBid();
        })
        this.setState({ bid: '' });
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
                            onKeyUp={this.handleKeyUp}
                            onChange={this.handleChange}
                            value={this.state.bid}
                            placeholder="bid goes here"
                            disabled={!this.props.initTimerDone ? true : false}
                        />
                        <button
                            onClick={() => this.handleSubmit(this.state.bid)}
                            disabled={!this.props.initTimerDone ? true : false}>
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
    timeLeft: state.timeLeft,
    currentBotHigh: state.currentBotHigh,
    currentBotHighBidder: state.currentBotHighBidder,
    currentBids: state.currentBids,
    initTimerDone: state.initTimerDone
  }
}

export default connect(mstp, { SetPlayerBid, SetOverallHighest, AddToBidsArray })(BidOnItem);