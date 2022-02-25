const LoadDate = async (link) => {

    const dados = await fetch(link)

   const dadosJson = await dados.json()

   return dadosJson
}

export default LoadDate