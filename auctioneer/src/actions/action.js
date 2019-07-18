export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const SET_IS_BIDDING = 'SET_IS_BIDDING';
export const MESSAGE_DISPLAYED = 'MESSAGE_DISPLAYED';
export const START_TIMER = 'START_TIMER';
export const SET_CURRENT_BOTS = 'SET_CURRENT_BOTS';
export const SET_PLAYER_BID = 'SET_PLAYER_BID';
export const SET_HIGHEST_BOT_BID = 'SET_HIGHEST_BOT_BID';
export const SET_HIGHEST_OVERALL = 'SET_HIGHEST_OVERALL';
export const ADD_TO_BIDS = 'ADD_TO_BIDS';
export const SET_HIGHEST_BIDDER = 'SET_HIGHEST_BIDDER';
export const SET_INIT_TIMER_STATUS = 'SET_INIT_TIMER_STATUS';
export const SET_NEW_ROUND_BUTTON = 'SET_NEW_ROUND_BUTTON';
export const RESET_BIDS = 'RESET_BIDS';
export const SET_NEW_BIDS = 'SET_NEW_BIDS';
export const REPLACE_BIDS = 'REPLACE_BIDS';
export const FIND_AND_REPLACE = 'FIND_AND_REPLACE';
export const SET_WINNER = 'SET_WINNER';
export const SET_WINNER_SCREEN = 'SET_WINNER_SCREEN';
export const SET_LOSER_SCREEN = 'SET_LOSER_SCREEN';
export const RESET_FOR_NEW_ROUND = 'RESET_FOR_NEW_ROUND';
export const SET_ROUND_STATUS = 'SET_ROUND_STATUS';

export function SetCurrentItem(id) {
  return {
    type: SET_CURRENT_ITEM,
    payload: id
  }
};

export function SetIsBidding(bool) {
    return {
        type: SET_IS_BIDDING,
        payload: bool
    }
};

export function WasMessageDisplayed(bool) {
    return {
        type: MESSAGE_DISPLAYED,
        payload: bool
    }
}

export function StartTimer(time) {
  return {
    type: START_TIMER,
    payload: time
  }
}

export function SetCurrentBots(arr) {
  return {
    type: SET_CURRENT_BOTS,
    payload: arr
  }
}

export function SetPlayerBid(bid) {
  return {
    type: SET_PLAYER_BID,
    payload: bid
  }
}

export function SetOverallHighest(bid) {
  return {
    type: SET_HIGHEST_OVERALL,
    payload: bid
  }
}

export function AddToBidsArray(bid) {
  return {
    type: ADD_TO_BIDS,
    payload: bid
  }
}

export function SetHighestBidder(obj) {
  return {
    type: SET_HIGHEST_BIDDER,
    payload: {...obj}
  }
}

export function SetInitTimerStatus(bool) {
  return {
    type: SET_INIT_TIMER_STATUS,
    payload: bool
  }
}

export function SetNewRound(bool) {
  return {
    type: SET_NEW_ROUND_BUTTON,
    payload: bool
  }
}

export function ClearCurrentBids() {
  console.log('***clear bids was called')
  return {
    type: RESET_BIDS,
    payload: [0]
  }
}

export function SetNewBids(obj) {
  return {
    type: SET_NEW_BIDS,
    payload: obj
  }
}

export function FindAndReplaceBot(obj) {
  return {
    type: FIND_AND_REPLACE,
    payload: obj
  }
}

export function SetWinner(obj) {
  return {
    type: SET_WINNER,
    payload: obj
  }
}

export function SetWinnerScreen(bool) {
  return {
    type: SET_WINNER_SCREEN,
    payload: bool
  }
}

export function SetLoserScreen(bool) {
  return {
    type: SET_LOSER_SCREEN,
    payload: bool
  }
}

export function ResetStateForNewRound(obj) {
  return {
    type: RESET_FOR_NEW_ROUND,
    payload: obj
  }
}

export function SetRoundStatus(bool) {
  return {
    type: SET_ROUND_STATUS,
    payload: bool
  }
}