import {shallowEqual, useSelector} from 'react-redux'
import Project from './Project'
import EmptyCard from '../EmptyCard';

function ProjectList() {
  let projects = useSelector(state => state.projects, shallowEqual)

  return (
    <div>
      {projects.map(project => <Project project={project} key={project.id}/>)}
      {!projects.length && <EmptyCard/>}
    </div>
  );
}

export default ProjectList;