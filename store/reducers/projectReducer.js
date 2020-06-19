import {HYDRATE} from 'next-redux-wrapper'
import {handleActions} from 'redux-actions'
import {addProject, updateProject, removeProject} from '../actions/projectActions'

const projectReducer = handleActions({
  [HYDRATE]: (state, {payload: {projects}}) => {
    // console.log(state, projects)
    return [/*...state,*/ ...projects]
  },

  [addProject]: (state, {payload: {project}}) => [...state, project],

  [updateProject]: (state, {payload: {project}}) => 
    state.map(oldproject => oldproject.id === project.id ? project: oldproject),

  [removeProject]: (state, {payload: {id}}) => 
    state.filter(project => project.id !== id)
}, [
  {
    id: 1, 
    name: 'Example Website', 
    url: 'https://example.com', 
    description: 'Best online website anyone has ever visited since the beginning of the internet.'
  }
]);

export default projectReducer;
