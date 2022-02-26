import './style.css'

import folder from '../../img/folder.svg'
import star from '../../img/star.svg'
import git_branch from '../../img/git-branch.svg'


const BoxProjects = ({project}) => (
    
    <div className="box boxProjects" key={project.name}>
        <div className="title-project">
            <img className = "folder-img" src= {folder} alt="folder" />
            <p className='Title'> {project.name}</p>
        </div>
        
        
            {project.description && <p className="small"> {project.description} </p>}
            {!project.description &&  <p className="small"> Este Projeto não tem descrição, mas você pode entrar em contato com o usuario. </p>}
             
        <div className="smallText">
        <p className="small"> <img src={star} alt="" /> <span> {project.stargazers_count}</span></p>

            <p className="small">  <img src={git_branch} alt="" /> <span>{project.forks_count}</span> </p>

            <p className="small"> {project.language}</p>
        </div>
    </div>
)

export default BoxProjects