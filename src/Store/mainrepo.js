const mainrepo = (state = {'Buy Grocery':'checked'}, action) => {
    switch(action.type) {
        case 'ADD_TASK':
        var unchecked = document.getElementById('item').value;
        console.log(state)
        // var newTask = {}
        return {
            ...state,
            unchecked
        }
        case 'CHECKED':
            //update the state to 1
            return state
        case 'UNCHECKED':
            //update the state to 0
            return state
        case 'DISPLAY':
            return state
        default:
            return state
    }
}

export default mainrepo;