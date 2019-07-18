import {
    SET_CURRENT_ITEM,
    SET_IS_BIDDING,
    MESSAGE_DISPLAYED,
    START_TIMER,
    SET_CURRENT_BOTS,
    SET_PLAYER_BID,
    SET_HIGHEST_OVERALL,
    ADD_TO_BIDS,
    SET_HIGHEST_BIDDER,
    SET_INIT_TIMER_STATUS,
    SET_NEW_ROUND_BUTTON,
    RESET_BIDS,
    SET_NEW_BIDS,
    FIND_AND_REPLACE,
    SET_WINNER,
    SET_WINNER_SCREEN,
    SET_LOSER_SCREEN,
    RESET_FOR_NEW_ROUND,
    SET_ROUND_STATUS
  } from '../actions/action';


const initialState = {
    items: [
        {
            id: 1,
            name: 'Sega Genesis Console',
            min: 120.00,
        },
        {
            id: 2,
            name: 'High-End Gaming PC',
            min: 1000.00,
        },
        {
            id: 3,
            name: 'Super Ninetendo',
            min: 250.00,
        },
        {
            id: 4,
            name: 'Ninetendo 64',
            min: 120.00,
        },
        {
            id: 5,
            name: 'PlayStation 1',
            min: 180.00,
        },
        {
            id: 6,
            name: 'Gameboy Color',
            min: 240.00,
        },
        {
            id: 7,
            name: 'Sega Dreamcast Console',
            min: 150.00,
        },
    ],
    soldItems: [],
    compPlayers: [
        {
            id: 1,
            displayName: 'SirRochesterII',
            totalBudget: 1400,
            winCount: 0,
            wonItems: [],
            currentBid: 0,
            maxForCurrent: 0
        },
        {
            id: 2,
            displayName: 'WilfredMan',
            totalBudget: 1000,
            winCount: 0,
            wonItems: [],
            currentBid: 0,
            maxForCurrent: 0
        },
        {
            id: 3,
            displayName: 'SirBuysItAll',
            totalBudget: 2000,
            winCount: 0,
            wonItems: [],
            currentBid: 0,
            maxForCurrent: 0
        },
        {
            id: 4,
            displayName: '$IGotTooMuchMoney$',
            totalBudget: 2800,
            winCount: 0,
            wonItems: [],
            currentBid: 0,
            maxForCurrent: 0
        },
        {
            id: 5,
            displayName: 'Batman',
            totalBudget: 1200,
            winCount: 0,
            wonItems: [],
            currentBid: 0,
            maxForCurrent: 0
        },
        {
            id: 6,
            displayName: 'RobinOfLoxly',
            totalBudget: 900,
            winCount: 0,
            wonItems: [],
            currentBid: 0,
            maxForCurrent: 0
        }
    ],
    livePlayer: {
        id: 7,
        displayName: 'HereToGame',
        totalBudget: 1500,
        winCount: 0,
        wonItems: [],
        currentBid: 0,
    },
    currentItem: [],
    displayedMessage: false,
    timeLeft: 59,
    currentBidders: [],
    currentBids: [],
    currentHighBid: 0,
    currentHighBidder: '',
    winner: {},
    showNewRoundButton: false,
    setNewBids: false,
    showWinnerView: false,
    showLoserView: false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }

        case SET_IS_BIDDING:
            return {
                ...state,
                biddingOnCurrent: action.payload
            }

        case MESSAGE_DISPLAYED:
            return {
                ...state,
                displayedMessage: action.payload
            }

        case START_TIMER:
            return {
                ...state,
                timeLeft: action.payload
            }

        case SET_CURRENT_BOTS:
            console.log(action.payload)
            return {
                ...state,
                currentBidders: action.payload
            }

        case SET_PLAYER_BID: {
            const newPlayer = {...initialState.livePlayer};
            newPlayer.currentBid = action.payload;
            return {
                ...state,
                livePlayer: newPlayer
            }
        }

        case SET_HIGHEST_OVERALL:
            return {
                ...state,
                currentHighBid: action.payload
            }

        case ADD_TO_BIDS:
            const newCurrentBids = initialState.currentBids;
            newCurrentBids.push(action.payload)
            return {
                ...state,
                currentBids: newCurrentBids
            }

        case SET_HIGHEST_BIDDER:
            return {
                ...state,
                currentHighBidder: action.payload
            }

        case SET_INIT_TIMER_STATUS:
            return {
                ...state,
                initTimerDone: action.payload
            }

        case SET_NEW_ROUND_BUTTON:
            return {
                ...state,
                showNewRoundButton: action.payload
            }

        case RESET_BIDS:
            return {
                ...state,
                currentBids: action.payload
            }

        case SET_NEW_BIDS:
            return {
                ...state,
                setNewBids: action.payload
            }

        case FIND_AND_REPLACE:
            return {
                ...state
            }

        case SET_WINNER:
            return {
                ...state,
                winner: action.payload
            }

        case SET_WINNER_SCREEN:
            return {
                ...state,
                showWinnerView: action.payload
            }

        case SET_LOSER_SCREEN:
            return {
                ...state,
                showLoserView: action.payload
            }

        case RESET_FOR_NEW_ROUND:
            console.log('reducer', action.payload);
            const newLive = {...initialState.livePlayer};
            if(action.payload.wonItems) {
                newLive.wonItems.push(action.payload.wonItems);
            }

            const newSold = [...state.soldItems];
            console.log(newSold)
            if(action.payload.soldItems) {
                newSold.push(action.payload.soldItems);
            }
            return {
                items: action.payload.items,
                soldItems: newSold,
                compPlayers: [
                    {
                        id: 1,
                        displayName: 'SirRochesterII',
                        totalBudget: 1400,
                        winCount: 0,
                        wonItems: [],
                        currentBid: 0,
                        maxForCurrent: 0
                    },
                    {
                        id: 2,
                        displayName: 'WilfredMan',
                        totalBudget: 1000,
                        winCount: 0,
                        wonItems: [],
                        currentBid: 0,
                        maxForCurrent: 0
                    },
                    {
                        id: 3,
                        displayName: 'SirBuysItAll',
                        totalBudget: 2000,
                        winCount: 0,
                        wonItems: [],
                        currentBid: 0,
                        maxForCurrent: 0
                    },
                    {
                        id: 4,
                        displayName: '$IGotTooMuchMoney$',
                        totalBudget: 2800,
                        winCount: 0,
                        wonItems: [],
                        currentBid: 0,
                        maxForCurrent: 0
                    },
                    {
                        id: 5,
                        displayName: 'Batman',
                        totalBudget: 1200,
                        winCount: 0,
                        wonItems: [],
                        currentBid: 0,
                        maxForCurrent: 0
                    },
                    {
                        id: 6,
                        displayName: 'RobinOfLoxly',
                        totalBudget: 900,
                        winCount: 0,
                        wonItems: [],
                        currentBid: 0,
                        maxForCurrent: 0
                    }
                ],
                livePlayer: newLive,
                currentItem: [],
                biddingOnCurrent: false,
                displayedMessage: false,
                timeLeft: 59,
                initTimerDone: false,
                currentBidders: [],
                currentBids: [],
                currentHighBid: 0,
                currentHighBidder: '',
                winner: {},
                showNewRoundButton: false,
                setNewBids: false,
                showWinnerView: false,
                showLoserView: false,
                newRound: true
            }

        case SET_ROUND_STATUS:
            return {
                ...state,
                newRound: action.payload
            }

        default:
            return state;
    }
  }

  export default reducer;