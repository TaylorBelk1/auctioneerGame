export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const SET_IS_BIDDING = 'SET_IS_BIDDING';
export const MESSAGE_DISPLAYED = 'MESSAGE_DISPLAYED';
export const START_TIMER = 'START_TIMER';
export const SET_CURRENT_BOTS = 'SET_CURRENT_BOTS';
export const SET_PLAYER_BID = 'SET_PLAYER_BID';
export const SET_HIGHEST_BOT_BID = 'SET_HIGHEST_BOT_BID';
export const SET_HIGHEST_OVERALL = 'SET_HIGHEST_OVERALL';

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

export function SetHighestBotBid(obj) {
  return {
    type: SET_HIGHEST_BOT_BID,
    payload: obj
  }
}

export function SetOverallHighest(obj) {
  return {
    type: SET_HIGHEST_OVERALL,
    payload: obj
  }
}