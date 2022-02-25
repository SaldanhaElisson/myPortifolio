const getRecenteRepo = (repo) => {
   
    // console.log(repo)
    let repos = repo.map((e) =>{
        // console.log(e)
        e.updated_at = Number(e.updated_at.slice(0, 10).replace('-', '').replace('-', ''))
       return e
    })

    
    // ordenando um array de objeto por dos seus atributos
    repos.sort((a, b) => {
        return a.updated_at - b.updated_at 
    }).reverse()

    const recetenRepo = repo.map((e) => {
        
    })
    
    return repos.slice(0, 5)

}

export default getRecenteRepo