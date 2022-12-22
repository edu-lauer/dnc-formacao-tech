const dia = document.getElementById("dias")
const hora = document.getElementById("horas")
const minuto = document.getElementById("minutos")
const segundo = document.getElementById("segundos")

const viagem = "01 dec 2023"

function countdown() {
    const ccxp22 = new Date(viagem)
    const hoje = new Date()

    const segundosTotal = (ccxp22 - hoje) / 1000

    const numDias = Math.floor(segundosTotal / 86400)
    const numHoras = Math.floor(segundosTotal / 3600) % 24
    const numMinutos = Math.floor(segundosTotal / 60) % 60
    const numSegundos = Math.floor(segundosTotal) % 60

    dia.innerHTML = formatoTempo(numDias)+"D"
    hora.innerHTML = formatoTempo(numHoras)+"H"
    minuto.innerHTML = formatoTempo(numMinutos)+"M"
    segundo.innerHTML = formatoTempo(numSegundos)+"S"

}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo
}

countdown()
setInterval(countdown, 1000)