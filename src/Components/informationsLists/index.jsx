const ListInformation = ({ dado }) => (

    <li key={dado.Empresa}>
        {dado.Cargo}
        <p> {dado.Ano}</p>
        <p> {dado.Empresa}</p>
    </li>
)

export default ListInformation