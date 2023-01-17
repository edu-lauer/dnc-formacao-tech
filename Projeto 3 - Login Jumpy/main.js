function checkForm() {
    var nome = document.getElementById('nomeCompleto').value
    var email = document.getElementById('email').value
    var tel = document.getElementById('telefone').value
    var cpf = document.getElementById('cpf').value
    var senha = document.getElementById('senha').value
    
    
    var arrayFormulario = []
    
    arrayFormulario.push(nome, email, tel, cpf, senha)
    
    let spans = document.querySelectorAll('.form-field span')


    arrayFormulario.forEach((data, index) => {
        if (data == '') {
            spans[index].classList.remove('hidden')
        } else {
            spans[index].classList.add('hidden')
        }       
    })

    let sucesso = verificaElementoVazio(arrayFormulario)

    if (sucesso == true) {
        document.querySelector('.spanGeral').innerText = 'Sucesso!'
        document.querySelector('.spanGeral').classList.add('greenText')     
    } else {
        document.querySelector('.spanGeral').innerText = 'Campos obirgatórios não registrados.'
        document.querySelector('.spanGeral').classList.remove('greenText')
    }
}

function verificaElementoVazio(array) {

    const elementoVazio = array.find(Element => Element == '')

    if (elementoVazio == '') {
        return false
    } else {
        return true
    }
}