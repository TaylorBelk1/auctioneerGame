import React from 'react';
import { PlayerCard, BidAmount } from '../../../styles/style';
import user from '../../../assetts/user.png';
import { connect } from 'react-redux';
import LoadingSpinner from '../../loading/loadingSpinner';
import { getRandomInt } from '../../../utils/utils';
import { AddToBidsArray, ClearCurrentBids } from '../../../actions/action';

class PlayerCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomTime: 0,
            canRender: false
        }
    }

    componentDidMount() {
        const random = getRandomInt(300, 1500);
        setTimeout(() => {
            this.setState({
                ...this.state,
                canRender: true
            })
        }, random);
        this.props.AddToBidsArray(this.props.players.currentBid);
        setTimeout(() => {
            console.log('currentBids in player card', this.props.currentBids)
            this.props.findHighestOverallBid();
        })
        // this.generateBids();
        console.log('PlayerCard Mounted')
    }

    generateBids = () => {
        const random = getRandomInt(300, 1500);
        setTimeout(() => {
            this.setState({
                ...this.state,
                canRender: true
            })
        }, random);
        this.props.AddToBidsArray(this.props.players.currentBid);
        setTimeout(() => {
            console.log('currentBids in player card', this.props.currentBids)
            this.props.findHighestOverallBid();
        })
    }

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
      livePlayer: state.livePlayer,
      genNewBids: state.genNewBids,
      currentHighBid: state.currentHighBid,
      currentBids: state.currentBids
    }
  }

  export default connect(mstp, {AddToBidsArray, ClearCurrentBids})(PlayerCards);