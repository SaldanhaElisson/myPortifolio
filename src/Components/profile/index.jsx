import './style.css'

const  Profile = ({img}) => (
    <div className="profile" key = {'Profile'}>
        <img src= {img} alt="profile-img" />
        <p className="Title"> Elisson Monteiro Saldanha</p>
        <p className="Function"> Progamador Full Stack</p>
    </div>
)

export default Profile