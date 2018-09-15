import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions/actions'


class Display extends Component {
    render() {
        // for (var k in this.state) {
        return (
        <div align="center">
            <table className="table is-striped is-hoverable has-text-primary">
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>Buy Groceries</td>
                    </tr>
                </tbody>    
            </table>
            <br />
                <input id="item" type="text" ></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(Display);