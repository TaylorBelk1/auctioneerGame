import React from 'react';
import { EndOfRoundWrap, WinLoseWrap } from '../../../styles/style';
import lose from '../../../assetts/lose.png';
import { connect } from 'react-redux';
import { ResetStateForNewRound } from '../../../actions/action';
import { withRouter } from 'react-router-dom';

// props from main.js
// restart={ this.startNewRound }

const PlayerLoses = (props) => {

    const resetForNewRound = () => {
        const { id } = props.match.params
        const newItems = props.items.filter(i => parseInt(i.id) !== parseInt(id))
        const sold = props.items.filter(i => parseInt(i.id) === parseInt(id))
        const tempData = {
            items: newItems,
            soldItems: sold,
            wonItems: []
        }
        console.log(tempData)
        props.ResetStateForNewRound(tempData)
        props.history.push('/');
    }

    return(
        <EndOfRoundWrap>
            <WinLoseWrap>
                <p>You lost this round!</p>
                <img src={lose} alt='party' width="96px"/><br />
                <button onClick={() => resetForNewRound()}>Next Round</button>
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

export default withRouter(connect(mstp, { ResetStateForNewRound })(PlayerLoses));