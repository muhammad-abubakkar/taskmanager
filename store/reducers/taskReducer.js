import {HYDRATE} from 'next-redux-wrapper'
import {handleActions} from 'redux-actions'
import {addTask, updateTask, markTask, removeTask} from '../actions/taskActions';

const taskReducer = handleActions({
  [HYDRATE]: (state, {payload: {tasks}}) => [/*...state,*/ ...tasks],

  [addTask]: (state, {payload: {task}}) => [...state, task],

  [updateTask]: (state, {payload: {task}}) => 
    state.map(oldtask => oldtask.id === task.id ? task : oldtask),

  [markTask]: (state, {payload: {id, status}}) => 
    state.map(task => task.id === id ? ({...task, done: status}): task),

  [removeTask]: (state, {payload: {id}}) => 
    state.filter(task => task.id !== id)
}, [])

export default taskReducer;

