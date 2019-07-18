import React from 'react';
import { EndOfRoundWrap, WinLoseWrap } from '../../../styles/style';
import win from '../../../assetts/win.png';
import { ResetStateForNewRound } from '../../../actions/action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// props from main.js
// restart={ this.startNewRound }

const PlayerWins = (props) => {

    // method to reset all state, add current item to soldItems and remove it from available items
    const resetForNewRound = () => {
        const { id } = props.match.params
        const newItems = props.items.filter(i => parseInt(i.id) !== parseInt(id))
        const sold = props.items.filter(i => parseInt(i.id) === parseInt(id))
        const tempData = {
            items: newItems,
            soldItems: sold,
            wonItems: sold
        }
        console.log(tempData)
        props.ResetStateForNewRound()
        props.history.push('/');
    }


    return(
        <EndOfRoundWrap>
            <WinLoseWrap>
                <p>You won this round!</p>
                <img src={win} alt='party' width="96px"/><br />
                <button onClick={() => resetForNewRound()}>Finish!</button>
            </WinLoseWrap>
        </EndOfRoundWrap>
    )
}

const mstp = state => {
    return {
        items: state.items,
        currentItem: state.currentItem,
        soldItems: state.soldItems
    }
}

export default withRouter(connect(mstp, { ResetStateForNewRound })(PlayerWins));