import Project from './Project'
import EmptyCard from '../EmptyCard';

function ProjectList({projects}) {
  return (
    <div>
      {projects.map(project => <Project project={project} key={project._id}/>)}
      {!projects.length && <EmptyCard/>}
    </div>
  );
}

export default ProjectList;