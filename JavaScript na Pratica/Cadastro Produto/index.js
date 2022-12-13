class Produto { 
    constructor() {
        this.id = 1
        this.arrayProdutos = []
    }

    adicionar() {

        let produto = this.lerDados()

        if (this.validar(produto) == true){
            this.salvar(produto)
        }

        this.listar()
        this.cancelar()
    }

    lerDados() {
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById("nomeProduto").value
        produto.valorProduto = document.getElementById("valorProduto").value

        return produto
    }

    validar(produto) {
        let msg = ''

        if (produto.nomeProduto == '') {
            msg += 'Insira nome do produto. \n'
        }

        if (produto.valorProduto == '') {
            msg += 'Insira o valor do produto. \n'
        }

        if (msg != '') {
            alert(msg)
            return false
        } else {
            return true
        }
    }

    salvar(produto) {
        this.arrayProdutos.push(produto)
        this.id += 1
    }

    listar() {
        let tbody = document.getElementById("tbody")
        tbody.innerText = ''

        for (let i = 0; i < this.arrayProdutos.length; i++) {

            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_del = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].valorProduto

            let imagem = document.createElement('img')

            imagem.src = './img/lixo.jpg'
            imagem.setAttribute('onclick', `produto.deletar(${this.arrayProdutos[i].id})`)

            td_del.appendChild(imagem)

        }
    }

    cancelar() {
        document.getElementById("nomeProduto").value = ''
        document.getElementById("valorProduto").value = ''
    }

    deletar(id) {
        let tbody = document.getElementById("tbody")

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert(`O item foi apagado com sucesso`)
    }
}

var produto = new Produto()