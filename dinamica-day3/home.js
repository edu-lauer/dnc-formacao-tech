function pegaResposta() {
    const url = new URLSearchParams(window.location.search)
    let botao = url.get("botao")
    

    if (botao == 0) {
        document.getElementById("mensagem").innerHTML = `Olá! Gostaria de te dar boas vindas a Cervejaria do Pericles.<br>Aqui você encontrará as melhores bebidas do Brasil!`
        document.querySelector(".botaoEntrar").hidden = false
    } else if (botao == 1) {
        document.getElementById("mensagem").innerHTML = `Sinto muito, mas este site só é permitido para maiores de 18 anos!<br> :(`
    }
}