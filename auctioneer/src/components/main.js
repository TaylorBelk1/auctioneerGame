import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameWrap, Auctioneer, UserChat, BidderAreaWrap } from '../styles/style';
import {
    SetCurrentItem,
    SetIsBidding,
    WasMessageDisplayed,
    StartTimer,
    SetCurrentBots,
    SetHighestBotBid
} from '../actions/action';
import BidPrompt from './BiddingViews/promptToBid';
import BidOnItem from './BiddingViews/bid';
import AuctioneerCard from './AuctioneerCard/auctioneer';
import BiddersArea from './BiddersArea/biddersArea';
import { getRandomIntRounded } from '../utils/utils';

class Main extends Component {

    componentDidMount() {
        const random = getRandomIntRounded(1, 7);
        const current = this.props.items.filter(item => {
            return item.id === random
        });
        this.props.SetCurrentItem(current);
    }

    componentDidUpdate(prevProps) {
        if(this.props.currentBidders !== prevProps.currentBidders) {
            const results = this.findHighestBotBid(this.props.currentBidders);
            this.props.SetHighestBotBid(results)
        }
    }

    setBiddingStatus = (bool) => {
        this.props.WasMessageDisplayed(true);
        this.props.SetIsBidding(bool);
        if(bool) {
            this.startTimer();
            setTimeout(() => {
                this.chooseRandomBidders();
            }, 10000)
        }
    }

    chooseRandomBidders = () => {
        //select a random number of bots to play
        let numberOfBotsBidding = getRandomIntRounded(1, 7);
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

        const newCurrentPlayers = this.generateBotMaxAmountForRound(currentPlayers);

        this.props.SetCurrentBots(newCurrentPlayers);
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

    generateBotMaxAmountForRound = (arr) => {
        const newCurrentBidder = arr.map(player => {
            // generate a max for this item
            const max = player.totalBudget / 2;
            const randomMax = Math.floor(Math.random() * Math.floor(max));
            const realMax = randomMax + this.props.currentItem[0].min;

            // generate a random bid for this item
            const randomInitialBid = Math.floor(Math.random() * Math.floor(realMax/2));

            return {...player, maxForCurrent: realMax, currentBid: randomInitialBid}
        });
        return newCurrentBidder
    }

    findHighestBotBid = (arr) => {
        let bid = 0;
        let highestBidder  = [];
        arr.map(function(a) {
            if(a.currentBid > bid) {
                bid = a.currentBid
                if(highestBidder.length > 0) {
                    highestBidder.pop();
                }
            highestBidder.push(a);
            }
        });
        return {bid, highestBidder}
    }

    render() {
        return (
            <GameWrap>
                <Auctioneer>
                    <AuctioneerCard />
                </Auctioneer>

                <BidderAreaWrap>
                    <BiddersArea players={this.props.currentBidders}/>
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
    timeLeft: state.timeLeft,
    currentBidders: state.currentBidders
  }
}

export default connect(mstp, {
    SetCurrentItem,
    SetIsBidding,
    WasMessageDisplayed,
    StartTimer,
    SetCurrentBots,
    SetHighestBotBid
    })(Main);