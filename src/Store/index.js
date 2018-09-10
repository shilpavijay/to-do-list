import { combineReducers } from 'redux';
import mainrepo from './mainrepo';
import addtask from './addtask';

export default combineReducers({
    mainrepo,
    addtask
})