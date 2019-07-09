import React from 'react';
import {TimerWrap} from '../../styles/style';
import { connect } from 'react-redux';

const Timer = (props) => {
    return(
        <TimerWrap>
            {props.timeLeft === 0 ?
            <h3>Times Up!</h3> :
            <h3>00:{props.timeLeft}</h3>
            }
        </TimerWrap>
    )
}

const mstp = state => {
    return {
      timeLeft: state.timeLeft
    }
  }

  export default connect(mstp, {})(Timer);