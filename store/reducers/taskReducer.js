import {v4 as uuid} from 'uuid'
import {HYDRATE} from 'next-redux-wrapper'
import {createActions, handleActions} from 'redux-actions'

const {ADD_TASK, UPDATE_TASK, MARK_TASK, REMOVE_TASK} = createActions(
  {
    'ADD_TASK': task => ({...task, id: uuid()}),
  },
  'UPDATE_TASK', 'MARK_TASK', 'REMOVE_TASK'
)

const taskReducer = handleActions({
  [HYDRATE]: (state, {payload: {tasks}}) => [...state, ...tasks],

  [ADD_TASK]: (state, {payload: {task}}) => [...state, task],

  [UPDATE_TASK]: (state, {payload: {task}}) => 
    state.map(oldtask => oldtask.id === task.id ? task : oldtask),

  [MARK_TASK]: (state, {payload: {id, status}}) => 
    state.map(task => task.id === id ? ({...task, done: status}): task),

  [REMOVE_TASK]: (state, {payload: {id}}) => 
    state.filter(task => task.id !== id)
}, [])

export default taskReducer;

