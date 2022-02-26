import BoxProjects from "../boxProjects"
import './style.css'

const CreatBoxProject = ({projects}) => {
    console.log(projects) 
    return (
    <div className="boxProjects" key={'lala'}>
        { projects.map((project) => {
          return (
            <a href={project.svn_url} target ="_blank" >
              <BoxProjects project={ project } key = {project.description}/>
            </a>
          )
        })}
    </div>
) }

export default CreatBoxProject