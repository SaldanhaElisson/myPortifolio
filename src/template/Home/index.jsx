import { Component } from "react";
import BoxSection from "../../Components/box-sections";
import BoxInformations from "../../Components/box/box-informations";
import BoxProjects from "../../Components/boxProjects";
import Profile from "../../Components/profile";

import LoadDate from "../../utils/load-date";
import getRecenteRepo from "../../utils/get-recent-repo";



class Home extends Component {
    state = {
      Experiencia: [
        {
          Cargo: 'Recrutamento e Seleção',
          Empresa: 'Esmaltec',
          Ano: '2021 - Atualmente'
        },

        {
          Cargo: 'Competição de Robòtica Regional',
          Empresa: 'Sesi',
          Ano: '2018 - 2019'
        },
        {
          Cargo: 'Festival Sesi de Robotica',
          Empresa: 'Sesi',
          Ano: '2019 - 2020'
        },
        {
          Cargo: 'Voluntario ONG',
          Empresa: 'Peter Pan',
          Ano: '2019 - 2020'
        },
      ],

      Educação: [
        {
          Cargo: 'JavaScript',
          Ano: '2020-2021',
          Empresa: 'Udemy'
        },
        {
          Cargo: 'React',
          Ano: '2021-2022',
          Empresa: 'Udemy'
        },
        {
          Cargo: 'HTML, CSS',
          Ano: '2020-2021',
          Empresa: 'Discover'
        },

        {
          Cargo: 'NodeJs',
          Ano: '2020-2021',
          Empresa: 'Udemy'
        }
      ],
      dateGitHub: [],
      RecentRepoGIt: []
    }

    async componentDidMount(){
      const datesGit = await LoadDate('https://api.github.com/users/SaldanhaElisson')
      this.setState({ dateGitHub: datesGit})
      
      const repoGit = await LoadDate('https://api.github.com/users/SaldanhaElisson/repos') 
      const recetenRepo = await getRecenteRepo(repoGit)
      this.setState({ RecentRepoGIt: recetenRepo})
    }
  
  render() {
    const { Experiencia } = this.state 
    const { Educação } = this.state
    const { dateGitHub } = this.state
    const { RecentRepoGIt } = this.state

    return (
      <>
      <div className="date">
      
      < Profile img = {dateGitHub.avatar_url} />
      
      <BoxInformations informations= { Experiencia } Title = {'Experiências'} key ={ 1 } />

      <BoxInformations informations= { Educação } Title = {'Educação'} key = { 2 }  />

      </div>

      <div className="projects">
        < BoxSection title={'My Projects'}/>
        <div className="MyProjects">
        < BoxProjects />
        < BoxProjects />
        </div>
      </div>
        
      </>
    )
  }
}

export default Home