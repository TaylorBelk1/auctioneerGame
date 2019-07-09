import React from 'react';
import auct from '../../assetts/auct.png';
import { connect } from 'react-redux';
import Timer from '../Timer/timer';

const AuctioneerCard = (props) => {
    console.log(props.currentItem)
    return (
        <>
            <img src={auct} alt="auctioneer" width="250px"/>
                <div>
                    <p>The first item up for auction is...</p>
                        {props.currentItem && props.currentItem.map(item => {
                            return <p key={item.id}>{item.name}</p>
                        })}
                    <h4>Bidding starts in:</h4>
                    <Timer />
                </div>
        </>
    )
}

const mstp = state => {
  return {
    currentItem: state.currentItem
  }
}

export default connect(mstp, {})(AuctioneerCard);