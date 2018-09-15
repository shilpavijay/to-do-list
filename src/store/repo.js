const mainrepo = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':     
        return [
            ...state,
            {
                id: state.length + 1,
                text: action.item,
                status: 0
            }
        ]
        default:
            return state
    }
}

export default mainrepo;