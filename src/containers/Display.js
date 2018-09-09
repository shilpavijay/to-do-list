import React, { Component } from 'react';
// import { connect } from 'react-redux';


class Display extends Component {
    render() {
        return (
        <div>
            <table className="table is-striped is-hoverable has-text-primary">
                <thead>
                <tr>
                    <th></th>
                    <th>List</th>
                </tr>
                </thead>
                <tbody>
                    <td><input type="checkbox"></input></td>
                    <td>Buy Groceries</td>
                {/* {this.state.rows.map(row => {
                    return (
                        <tr key={row.ID}>
                            <td>{row.ID}</td>
                            <td><input class="input is-primary is-rounded" maxLength="15" size="15" id={row.ID} type='text' value={row.Name} onChange={(e) => this.update(e.target.id,'Name',e.target.value)}/></td>
                            <td><input class="input is-primary is-rounded" maxLength="3" size="3"  id={row.ID} type='text' value={row.Age} onChange={(e) => this.update(e.target.id,'Age',e.target.value)}/></td>
                            <td><input class="input is-primary is-rounded" maxLength="7" size="7" id={row.ID} type='text' value={row.Sal} onChange={(e) => this.update(e.target.id,'Sal',e.target.value)}/></td>
                            <td><input class="input is-primary is-rounded" maxLength="15" size="15" id={row.ID} type='text' value={row.Dept} onChange={(e) => this.update(e.target.id,'Dept',e.target.value)}/></td>
                            <td><button class="button is-danger" id={row.ID} onClick={(e) => this.delete(e.target.id)}>-</button></td>
                        </tr>
                    )
                })} */}
                </tbody>    
            </table>
                <input type="text"></input>
                {/* <button class="button is-primary is-rounded" onClick={() => this.add()}>ADD</button> */}
                
                <button class="button is-primary is-rounded">ADD</button>
        </div>
        )
    }
}

export default Display;