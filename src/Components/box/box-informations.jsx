// import { Component } from "react";
import './style.css'
import  ListInformation  from '../informationsLists'

const BoxInformations = ({ informations, Title, format}) => (
    <div className="box" key = { Title }>
        <p className='Title' > { Title }</p>
        <ul>

            {informations.map(dado1 => ( 
                < ListInformation dado = {dado1} key = { dado1.cargo }/>
            ))}

        </ul>
    </div>
)

export default BoxInformations