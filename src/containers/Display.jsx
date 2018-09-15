import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions/actions'


class Display extends Component {
    render() {
        return ( 
        <div align="center">
            <input id="item" type="text"></input>
            <br/>
            <br/>
            <button className="button is-primary is-rounded" onClick={(e) => this.props.add(e.target.parentElement.firstElementChild.value)}>ADD</button>
            <br/>
            <br/>
            {
                this.props.repo.map(row => <p align="left" key={row.id}><input type="checkbox" value={row.status}/>&nbsp;{row.text}</p>)
            }
        </div>
        )
    }
}

const mapStateToProps = state => ({
    repo: state.repo
})

const mapDispatchToProps = dispatch => ({
    add: (item) => dispatch(addToList(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Display);