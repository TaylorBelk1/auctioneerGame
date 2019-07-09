import {
    SET_CURRENT_ITEM,
    SET_IS_BIDDING,
    MESSAGE_DISPLAYED,
    START_TIMER
  } from '../actions/action';


const initialState = {
    items: [
        {
            id: 1,
            name: 'Sega Genesis Console with controllers and 12 games',
            min: 120.00,
            currentHighBid: 0,
            currentHighBidder: ''
        },
        {
            id: 2,
            name: 'High-End Gaming PC',
            min: 1000.00,
            currentHighBid: 0,
            currentHighBidder: ''
        },
        {
            id: 3,
            name: 'Super Ninetendo with controllers and 8 games',
            min: 250.00,
            currentHighBid: 0,
            currentHighBidder: ''
        },
        {
            id: 4,
            name: 'Ninetendo 64 with controllers and 9 games',
            min: 120.00,
            currentHighBid: 0,
            currentHighBidder: ''
        },
        {
            id: 5,
            name: 'PlayStation 1 with controllers and 15 games',
            min: 180.00,
            currentHighBid: 0,
            currentHighBidder: ''
        },
        {
            id: 6,
            name: 'Gameboy Color and 12 games',
            min: 240.00,
            currentHighBid: 0,
            currentHighBidder: ''
        },
        {
            id: 7,
            name: 'Sega Dreamcast Console with Controllers and 12 Games',
            min: 150.00,
            currentHighBid: 0,
            currentHighBidder: ''
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
    timeLeft: 30
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

        default:
            return state;
    }
  }

  export default reducer;