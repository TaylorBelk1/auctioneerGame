import React from 'react';
import auct from '../../assetts/auct.png';
import { connect } from 'react-redux';

const AuctioneerCard = (props) => {
    return (
        <>
            <img src={auct} alt="auctioneer" width="250px"/>
                <div>
                    <p>The first item up for auction is...</p>
                        {props.currentItem.map(item => {
                            return <p key={item.id}>{item.name}</p>
                        })}
                </div>
        </>
    )
}

const mstp = state => {
    console.log(state)
  return {
    currentItem: state.currentItem
  }
}

export default connect(mstp, {})(AuctioneerCard);