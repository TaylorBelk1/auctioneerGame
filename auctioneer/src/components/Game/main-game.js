import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    GameWrap,
    Auctioneer,
    UserChat,
    BidderAreaWrap,
    HighestDisplay
} from '../../styles/style';
import {
    SetCurrentItem,
    SetIsBidding,
    WasMessageDisplayed,
    StartTimer,
    SetCurrentBots,
    SetOverallHighest,
    SetHighestBidder,
    SetWinner,
    SetWinnerScreen,
    SetLoserScreen
} from '../../actions/action';
import BidPrompt from './BiddingViews/promptToBid';
import BidOnItem from './BiddingViews/bid';
import AuctioneerCard from './AuctioneerCard/auctioneer';
import BiddersArea from './BiddersArea/biddersArea';
import { getRandomIntRounded } from '../../utils/utils';
import CurrentHigh from './AuctioneerCard/currentHighest';
import PlayerWins from './WinOrLose/playerWins';
import PlayerLoses from './WinOrLose/playerLoses';
import worker_script from '../../worker';

class MainGame extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        const current = this.props.items.filter(i => {
            return parseInt(i.id) === parseInt(id);
        });
        this.props.SetCurrentItem(current);
    }

    componentWillUnmount() {
        console.log('Unmounting main-game');
    }

    biddingLoop = () => {
        setTimeout(() => {
            if(this.props.timeLeft > 0) {
                console.log('trying')
                // check currentBidders and remove the highest bidder if he exists
                const notHighestBidders = this.props.currentBidders.filter(b => {
                    return b.id !== this.props.currentHighBidder.id
                });

                // pick a random bot that will vote
                const max = notHighestBidders.length;
                const randomId = getRandomIntRounded(0, max);
                let newBidder = notHighestBidders[randomId];

                // pick a random new bid for that bot
                const min = this.props.currentHighBid/2;
                const randomBid = getRandomIntRounded(min, newBidder.maxForCurrent);

                // if the randomBid is higher than the current high bid then update state
                if(randomBid > this.props.currentHighBid) {
                    // find the index of the newBidder in the currentBidders array
                    const ind = this.props.currentBidders.findIndex(i => {
                        return i.id === newBidder.id
                    });

                    // update the bidder at that index to the new bid in a temp array
                    const tempArr = this.props.currentBidders;
                    tempArr[ind].currentBid = randomBid;
                    // set the temp array to the new currentBidders array
                    this.props.SetCurrentBots(tempArr);

                    // find the highest bid
                    // console.log('currentBidders', this.props.currentBidders)
                    let highest = 0;
                    let highestBidder = {};
                    this.props.currentBidders.forEach(i => {
                        if(i.currentBid > highest) {
                            highest = i.currentBid;
                            highestBidder = {...i};
                        }
                    })

                    this.props.SetOverallHighest(highest);
                    this.props.SetHighestBidder(highestBidder);
                }
                    this.biddingLoop();
            }
    }, 3000);
    }

    checkForWin = () => {
        this.props.SetWinner(this.props.currentHighBidder);
        if(this.props.winner.id === this.props.livePlayer.id) {
            this.props.SetWinnerScreen(true)
        } else this.props.SetLoserScreen(true);
    }

    setBiddingStatus = () => {
        console.log('setBiddingCalled')
        console.log('current Bids', this.props.currentBids)
        this.timer(this.props.timeLeft);
        console.log(this.props.timeLeft)
        this.props.WasMessageDisplayed(true);
        this.chooseRandomBidders();
        console.log(this.props.currentBidders)
        setTimeout(() => {
            this.biddingLoop();
        }, 3000);
        setTimeout(() => {
            this.checkForWin()
        }, 60000);
    }

    chooseRandomBidders = () => {
        //select a random number of bots to play
        let numberOfBotsBidding = getRandomIntRounded(3, this.props.compPlayers.length);
        if(numberOfBotsBidding === 0) {
            numberOfBotsBidding++
        }
        // pick which bots will play randomly
        let pickable = this.props.compPlayers;
        let bidderIds = [];
        for(let i = 1; i < numberOfBotsBidding; i++) {
            // create random bidder id's to use later
            let tempBidder = getRandomIntRounded(1, 7);
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
        setTimeout(() => {
            console.log('initial', this.props.currentBidders)
        })
    }

    generateBotMaxAmountForRound = (arr) => {
        console.log('gen bot max', arr)
        const newCurrentBidder = arr.map(player => {
            // generate a max for this item
            const max = player.totalBudget / 2;
            const randomMax = Math.floor(Math.random() * Math.floor(max));
            const realMax = randomMax + this.props.currentItem[0].min;
            // generate a random bid for this item
            const randomInitialBid = Math.floor(Math.random() * Math.floor(realMax/2));

            return {...player, maxForCurrent: realMax, currentBid: randomInitialBid}
        });
        console.log(newCurrentBidder)
        return newCurrentBidder
    }

    findHighestOverallBid = () => {
        // parse all currentBids to int
        let bids = this.props.currentBids.map(bid => {
            return parseInt(bid);
        });
        // find the highest bid in the array
        const max = Math.max(...bids);
        // set the current highest bid
        setTimeout(() => {
            this.props.SetOverallHighest(max);
            this.findTheHighestBidder(max);
        })
        console.log(this.props.currentBids)
    }

    findTheHighestBidder = (bid) => {
        const allBidders = [];
        // push all the bot players and the livePlayer into one array
        allBidders.push(...this.props.currentBidders, this.props.livePlayer);
        // return the bidder whose bid matches the highest bid
        const highestBidder = allBidders.filter(player => {
            return player.currentBid === bid
        });

        this.props.SetHighestBidder(highestBidder[0]);
    }

    timer = (time) => {
        let myWorker = new Worker(worker_script)
        myWorker.onmessage = (m) => {
            this.props.StartTimer(m.data)
        };
        myWorker.postMessage(time);
    }

    render() {
        // determine if winner or loser view should be shown
        if(this.props.showWinnerView) {
            return <PlayerWins />
        } else if(this.props.showLoserView) {
            return <PlayerLoses />
        }
        // if not return the main game view
        return (
            <GameWrap>
                <HighestDisplay>
                    {this.props.currentHighBid > 0 &&
                    this.props.currentHighBidder !== '' ? <CurrentHigh /> : <></>
                    }
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
    setNewBids: state.setNewBids,
    winner: state.winner,
    showWinnerView: state.showWinnerView,
    showLoserView: state.showLoserView,
    soldItems: state.soldItems,
    newRound: state.newRound
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
    SetWinner,
    SetWinnerScreen,
    SetLoserScreen,
    })(MainGame);