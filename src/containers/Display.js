import React, { Component } from 'react';
import { connect } from 'react-redux';


class Display extends Component {
    render() {
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
                    <td><input type="checkbox"></input></td>
                    <td>Buy Groceries</td>
                    <br />
                    <br />
                </tbody>    
            </table>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    addtask: state.addtask
})

const mapDispatchToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Display);