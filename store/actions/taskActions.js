import {v4 as uuid} from 'uuid'
import {createActions} from 'redux-actions';

export const {addTask, updateTask, markTask, removeTask} = createActions(
  {
    'ADD_TASK': task => ({task: {...task, id: uuid()}}),
  },
  'UPDATE_TASK', 'MARK_TASK', 'REMOVE_TASK'
)