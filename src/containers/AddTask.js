import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTask extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                <button>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    addedItem: state.addedItem
})

const mapDispatchToProps = state => ({ 
    //actions go here
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)