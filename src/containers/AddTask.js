import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions/actions'

class AddTask extends Component {
    render() {
        return (
            <div align="center">
                <br />
                <input type="text"></input>
                {/* <button class="button is-primary is-rounded" onClick={() => this.add()}>ADD</button> */}
                <br />
                <br />
                <button class="button is-primary is-rounded" onClick={this.props.add}>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addtask: state.addtask
})

const mapDispatchToProps = dispatch => ({ 
    add: () => dispatch(addToList),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)