function sumirCard() {
    document.getElementById("card").style.setProperty('display', 'none', 'important')
    document.getElementById("pais").value = ''
}


function procurar() {

    document.getElementById("card").style.setProperty('display', 'block', 'important')

    let pais = document.getElementById("pais").value

    let url = `https://restcountries.com/v3.1/name/${pais}?fullText=true`

    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        let bandeira = document.getElementById("bandeira")
        let nome = document.getElementById("nome")
        let capital = document.getElementById("capital")
        let continente = document.getElementById("continente")
        let populacao = document.getElementById("populacao")

        bandeira.src = data[0].flags.svg
        nome.innerHTML = pais
        capital.innerHTML = data[0].capital[0]
        continente.innerHTML = data[0].continents[0]
        populacao.innerHTML = data[0].population

    })
}