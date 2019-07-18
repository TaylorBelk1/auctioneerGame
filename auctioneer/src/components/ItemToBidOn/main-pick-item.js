import React, { Component } from 'react';
import ItemsList from './components/items-list';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PickItemWrap, PickItem, PickItemButton } from '../../styles/style';
import { SetCurrentItem } from '../../actions/action';

class PickAnItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentItem: [],
            currentItemId: 0
        }
    }

    componentDidMount() {
        console.log(this.props.items)
    }

    componentWillUnmount() {
        console.log('Unmounting main-pick-item');
    }

    getFromKiddoAndFilter = (item) => {
        console.log(item)
        const newItem = this.props.items.filter(i => {
            return i.id === item.id
        });
        this.setState({ currentItem: newItem, currentItemId: newItem[0].id })
    }

    handleClick = () => {
        this.props.SetCurrentItem(this.state.currentItem)
    }

    render() {
        console.log(this.state.currentItemId)
        return(
            <PickItemWrap>
                <h1>Pick an Item to bid on:</h1>
                    {this.props.items.map(item => {
                        return (
                            <PickItem key={item.id}>
                                <ItemsList item={item} handleClick={this.getFromKiddoAndFilter} />
                            </PickItem>
                    )})}
                    <PickItemButton onClick={() => this.handleClick()}>
                        <Link to={`/${this.state.currentItemId}`}>
                            Confirm Item
                        </Link>
                    </PickItemButton>
            </PickItemWrap>
        )
    }
}

const mstp = state => {
    return {
        items: state.items
    }
}
export default connect(mstp, {SetCurrentItem})(PickAnItem);