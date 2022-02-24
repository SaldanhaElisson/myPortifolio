const LoadDate = async () => {
    const dadosUser = 'https://api.github.com/users/SaldanhaElisson'

    const dados = await fetch(dadosUser)

   const dadosJson = await dados.json()

   return dadosJson
}

export default LoadDate