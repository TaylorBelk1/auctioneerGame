import React from 'react';
import auct from '../../assetts/auct.png';
import { connect } from 'react-redux';
import Timer from '../Timer/timer';

const AuctioneerCard = (props) => {
    return (
        <>
            <img src={auct} alt="auctioneer" width="250px"/>
                <div>
                    <p>The first item up for auction is...</p>
                        {props.currentItem && props.currentItem.map(item => {
                            return <p key={item.id}>{item.name}</p>
                        })}
                        {props.initTimerDone ?
                            <h4>Bidding ends in:</h4> :
                            <h4>Bidding starts in:</h4>
                        }
                    <Timer />
                </div>
        </>
    )
}

const mstp = state => {
  return {
    currentItem: state.currentItem,
    initTimerDone: state.initTimerDone
  }
}

export default connect(mstp, {})(AuctioneerCard);