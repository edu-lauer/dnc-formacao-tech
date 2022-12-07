function calcular() {

    let numTabuada = document.getElementById("numTabuada").value
    let numMax = document.getElementById("numMax").value

    if(numTabuada == '' || numMax == '') {
        alert('[ERRO] Preecha os campos')
    } else {
        numTabuada = Number(numTabuada)
        numMax = Number(numMax)
        let divResposta = document.getElementById("resposta")
    
        divResposta.innerHTML = `A tabuada do ${numTabuada} é: <br>`
    
        for(let i = 0; i <= numMax; i++) {
            let resultadoMultiplicacao = numTabuada * i
    
            divResposta.innerHTML += `${i} x ${numTabuada} = ${resultadoMultiplicacao} <br>` 
        }
    }
}