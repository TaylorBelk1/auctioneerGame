import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameWrap, Auctioneer, UserChat, BidderAreaWrap } from '../styles/style';
import { SetCurrentItem, SetIsBidding, WasMessageDisplayed, StartTimer } from '../actions/action';
import BidPrompt from './BiddingViews/promptToBid';
import BidOnItem from './BiddingViews/bid';
import AuctioneerCard from './AuctioneerCard/auctioneer';
import BiddersArea from './BiddersArea/biddersArea';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBidders: []
        }
    }

    componentDidMount() {
        const random = this.setItem();
        const current = this.props.items.filter(item => {
            return item.id === random
        });
        this.props.SetCurrentItem(current);
    }

    setItem = () => {
        return Math.floor(Math.random() * Math.floor(7));
    }

    setBiddingStatus = (bool) => {
        this.props.WasMessageDisplayed(true);
        this.props.SetIsBidding(bool);
        if(bool) {
            this.chooseRandomBidders();
            this.startTimer();
        }
    }

    chooseRandomBidders = () => {
        //select a random number of bots to play
        let numberOfBotsBidding = Math.floor(Math.random() * Math.floor(8));
        if(numberOfBotsBidding === 0) {
            numberOfBotsBidding++
        }

        // pick which bots will play randomly
        let pickable = this.props.compPlayers;
        let bidderIds = [];
        for(let i = 0; i < numberOfBotsBidding; i++) {
            // create random bidder id's to use later
            let tempBidder = Math.floor( Math.random() * (Math.floor(8) ) );
            // handle zeros
            if(tempBidder <= 0) {
                tempBidder = 1;
            }
            // remove duplicates
            bidderIds = bidderIds.filter(item => {
                return item !== tempBidder
            })
            bidderIds.push(tempBidder)
        };
        // find all players who have matching bid id's
        const currentPlayers = pickable.filter(item => {
            return bidderIds.includes(item.id);
        })

        this.setState({
            ...this.state,
            currentBidders: currentPlayers
        });
    }

    startTimer = () => {
        // start countdown timer on load
        setInterval(() => {
            if(this.props.timeLeft > 0) {
                let time = this.props.timeLeft -1
                this.props.StartTimer(time)
            } else {
                clearInterval();
            }
        }, 1000);
    }

    render() {
        console.log(this.state.currentBidders)
        return (
            <GameWrap>
                <Auctioneer>
                    <AuctioneerCard />
                </Auctioneer>

                <BidderAreaWrap>
                    <BiddersArea players={this.state.currentBidders}/>
                </BidderAreaWrap>

                <UserChat>
                    {this.props.displayedMessage ?
                        <BidOnItem /> :
                        <BidPrompt setBiddingStatus={this.setBiddingStatus}/>
                    }
                </UserChat>
            </GameWrap>
        );
    }
}

const mstp = state => {
  return {
    items: state.items,
    compPlayers: state.compPlayers,
    livePlayer: state.livePlayer,
    currentItem: state.currentItem,
    displayedMessage: state.displayedMessage,
    timeLeft: state.timeLeft
  }
}

export default connect(mstp, { SetCurrentItem, SetIsBidding, WasMessageDisplayed, StartTimer })(Main);