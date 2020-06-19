import {v4 as uuid} from 'uuid'
import {createActions} from 'redux-actions';

export const {addProject, updateProject, removeProject} = createActions(
  {
    'ADD_PROJECT': project => ({project: {...project, id: uuid()}})
  }, 
  'UPDATE_PROJECT', 'REMOVE_PROJECT'
);
