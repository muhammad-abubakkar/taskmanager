import {v4 as uuid} from 'uuid'
import {HYDRATE} from 'next-redux-wrapper'
import {createActions, handleActions} from 'redux-actions'

const {ADD_PROJECT, UPDATE_PROJECT, REMOVE_PROJECT} = createActions(
  {
    'ADD_PROJECT': project => ({...project, id: uuid()})
  }, 
  'UPDATE_PROJECT', 'REMOVE_PROJECT'
);

const projectReducer = handleActions({
  [HYDRATE]: (state, {payload: {projects}}) => [...state, ...projects],

  [ADD_PROJECT]: (state, {payload: {project}}) => [...state, project],

  [UPDATE_PROJECT]: (state, {payload: {project}}) => 
    state.map(oldproject => oldproject.id === project.id ? project: oldproject),

  [REMOVE_PROJECT]: (state, {payload: {id}}) => 
    state.filter(project => project.id !== id)
}, []);

export default projectReducer;
