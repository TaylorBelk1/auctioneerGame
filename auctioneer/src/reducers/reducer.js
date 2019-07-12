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
    REPLACE_BIDS
  } from '../actions/action';


const initialState = {
    items: [
        {
            id: 1,
            name: 'Sega Genesis Console with controllers and 12 games',
            min: 120.00,
        },
        {
            id: 2,
            name: 'High-End Gaming PC',
            min: 1000.00,
        },
        {
            id: 3,
            name: 'Super Ninetendo with controllers and 8 games',
            min: 250.00,
        },
        {
            id: 4,
            name: 'Ninetendo 64 with controllers and 9 games',
            min: 120.00,
        },
        {
            id: 5,
            name: 'PlayStation 1 with controllers and 15 games',
            min: 180.00,
        },
        {
            id: 6,
            name: 'Gameboy Color and 12 games',
            min: 240.00,
        },
        {
            id: 7,
            name: 'Sega Dreamcast Console with Controllers and 12 Games',
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
    biddingOnCurrent: false,
    displayedMessage: false,
    timeLeft: 10,
    initTimerDone: false,
    currentBidders: [],
    currentBids: [],
    currentHighBid: 0,
    currentHighBidder: '',
    winner: {},
    showNewRoundButton: false,
    setNewBids: false
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
            console.log(action.payload)
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
            console.log('reducer', action.payload)
            return {
                ...state,
                currentBids: action.payload
            }

        case SET_NEW_BIDS:
            return {
                ...state,
                setNewBids: action.payload
            }

        case REPLACE_BIDS:
            let end = initialState.currentBids.length;
            let tempBids = initialState.currentBids;
            tempBids.slice(0, end);
            tempBids = action.payload
            return {
                ...state,
                currentBids: tempBids
            }

        default:
            return state;
    }
  }

  export default reducer;