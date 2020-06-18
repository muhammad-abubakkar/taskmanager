import {combineReducers} from 'redux'
import projects from './projectReducer';
import tasks from './taskReducer';

export default combineReducers({
  projects,
  tasks
})