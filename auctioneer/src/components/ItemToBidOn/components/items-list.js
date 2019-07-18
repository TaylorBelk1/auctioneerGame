import React, { Component } from 'react';
import { PickItemSpan, PickItemInput } from '../../../styles/style';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';


class ItemsList extends Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    onChange = (item) => {
        if(!this.state.checked) {
            this.props.handleClick(item)
        }
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return(
            <>
                <PickItemInput>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={() => this.onChange(this.props.item)}
                        value="checked"
                        color="primary"
                    />
                </PickItemInput>
                <PickItemSpan>
                    <p>{this.props.item.name}</p>
                </PickItemSpan>
            </>
        )
    }
}

const mstp = state => {
    return {
        currentItem: state.currentItem
    }
}
export default connect(mstp, {})(ItemsList);