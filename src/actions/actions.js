const check = "CHECKED"
const uncheck = "UNCHECKED"
const display = "DISPLAY"
const addTask = "ADD_TASK"

export const checked = {
    type: check
}

export const unchecked = {
    type: uncheck
}

export const disp = {
    type: display
}

export const addToList = (item) => ({
    type: addTask,
    item
})