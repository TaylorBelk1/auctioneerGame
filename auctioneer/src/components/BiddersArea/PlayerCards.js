import React from 'react';
import { PlayerCard, BidAmount } from '../../styles/style';
import user from '../../assetts/user.png';
import { connect } from 'react-redux';
import LoadingSpinner from '../loading/loadingSpinner';
import { getRandomInt } from '../../utils/utils';

class PlayerCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomTime: 0,
            canRender: false
        }
    }

    componentDidMount() {
        const random = getRandomInt(800, 2000);
        setTimeout(() => {
            this.setState({
                ...this.state,
                canRender: true
            })
        }, random)
    }

    // getRandomInt = (min, max) => {
    //     return Math.random() * (max - min) + min;
    // }



    // const randomTime = getRandomInt(500, 2000);
    render() {
        return(
            <PlayerCard key={this.props.players.id}>
                <img src={user} alt='user logo' />
                {
                    this.state.canRender ?
                    <BidAmount>{this.props.players.currentBid}</BidAmount> :
                    <div>
                        <LoadingSpinner />
                    </div>
                }
                <p>{this.props.players.displayName}</p>
            </PlayerCard>
        )
    }
}

const mstp = state => {
    return {
      compPlayers: state.compPlayers,
      livePlayer: state.livePlayer
    }
  }

  export default connect(mstp, {})(PlayerCards);