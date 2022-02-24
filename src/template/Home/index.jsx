import { Component } from "react";
import BoxInformations from "../../Components/box/box-informations";
import Profile from "../../Components/profile";

import LoadDate from "../../utils/load-date";

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

      dateGitHub: []

    }

    async componentDidMount(){
      const datesGit = await LoadDate()
      this.setState({ dateGitHub: datesGit})
    }
  
  render() {
    const { Experiencia } = this.state 
    const { Educação } = this.state
    const { dateGitHub } = this.state

    return (
      <>
      <div className="date">
      
      < Profile img = {dateGitHub.avatar_url} />
      
      <BoxInformations informations= { Experiencia } Title = {'Experiências'} key ={ 1 } />

      <BoxInformations informations= { Educação } Title = {'Educação'} key = { 2 }  />

      </div>

      <div className="projects">

      </div>
        
      </>
    )
  }
}

export default Home