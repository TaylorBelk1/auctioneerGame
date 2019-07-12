import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameWrap, Auctioneer, UserChat, BidderAreaWrap, HighestDisplay } from '../styles/style';
import {
    SetCurrentItem,
    SetIsBidding,
    WasMessageDisplayed,
    StartTimer,
    SetCurrentBots,
    SetOverallHighest,
    SetHighestBidder,
    SetInitTimerStatus,
    AddToBidsArray,
    ClearCurrentBids,
    SetNewBids,
    ReplaceCurrentBids
} from '../actions/action';
import BidPrompt from './BiddingViews/promptToBid';
import BidOnItem from './BiddingViews/bid';
import AuctioneerCard from './AuctioneerCard/auctioneer';
import BiddersArea from './BiddersArea/biddersArea';
import { getRandomIntRounded } from '../utils/utils';
import CurrentHigh from './AuctioneerCard/currentHighest';

class Main extends Component {

    componentDidMount() {
        const random = getRandomIntRounded(1, 7);
        const current = this.props.items.filter(item => {
            return item.id === random
        });
        this.props.SetCurrentItem(current);
    }

    componentDidUpdate(prevProps) {
        if(this.props.initTimerDone && this.props.timeLeft <= 55 && this.props.timeLeft > 0) {

        }
    }

    setBiddingStatus = (bool) => {
        this.props.WasMessageDisplayed(true);
        this.props.SetIsBidding(bool);
        if(bool) {
            this.startTimer();
            setTimeout(() => {
                this.chooseRandomBidders();
                this.props.SetInitTimerStatus(true);
                this.props.StartTimer(59);
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
            let tempBidder = getRandomIntRounded(1, 7);;
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

    findHighestOverallBid = () => {
        // parse all currentBids to int
        const bids = this.props.currentBids.map(bid => {
            return parseInt(bid);
        });
        // find the highest bid in the array
        const max = Math.max(...bids);
        // set the current highest bid
        this.props.SetOverallHighest(max);
        this.findTheHighestBidder(max)
    }

    findTheHighestBidder = (bid) => {
        const allBidders = [];
        // push all the bot players and the livePlayer into one array
        allBidders.push(...this.props.currentBidders, this.props.livePlayer);
        // return the bidder whose bid matches the highest bid
        const highestBidder = allBidders.filter(player => {
            return player.currentBid === bid
        });
        this.props.SetHighestBidder(...highestBidder);
    }

    render() {
        return (
            <GameWrap>
                <HighestDisplay>
                    {this.props.currentHighBid > 0 ? <CurrentHigh /> : <></>}
                </HighestDisplay>
                <Auctioneer>
                    <AuctioneerCard />
                </Auctioneer>

                <UserChat>
                    {this.props.displayedMessage ?
                        <BidOnItem findHighestOverallBid={this.findHighestOverallBid} /> :
                        <BidPrompt setBiddingStatus={this.setBiddingStatus} />
                    }
                </UserChat>

                {this.props.displayedMessage ?
                    <BidderAreaWrap>
                        <BiddersArea
                            players={this.props.currentBidders}
                            findHighestOverallBid={this.findHighestOverallBid}
                        />
                    </BidderAreaWrap> : <></>
                }
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
    currentBidders: state.currentBidders,
    currentHighBid: state.currentHighBid,
    currentBids: state.currentBids,
    currentHighBidder: state.currentHighBidder,
    initTimerDone: state.initTimerDone,
    setNewBids: state.setNewBids
  }
}

export default connect(mstp, {
    SetCurrentItem,
    SetIsBidding,
    WasMessageDisplayed,
    StartTimer,
    SetCurrentBots,
    SetOverallHighest,
    SetHighestBidder,
    SetInitTimerStatus,
    AddToBidsArray,
    ClearCurrentBids,
    SetNewBids,
    ReplaceCurrentBids
    })(Main);