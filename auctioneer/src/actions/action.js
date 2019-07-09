export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const SET_IS_BIDDING = 'SET_IS_BIDDING';
export const MESSAGE_DISPLAYED = 'MESSAGE_DISPLAYED';
export const START_TIMER = 'START_TIMER';

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