const mainrepo = (state = {tasks: []}, action) => {
    switch(action.type) {
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