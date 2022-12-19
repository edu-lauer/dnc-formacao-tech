var meds = []


function addMed() {

    event.preventDefault()

    let med = {
        "nomeMed": document.getElementById("medName").value,
        "qntd": document.getElementById("qntDisp").value,
        "medClasse": document.getElementById("medClasse").value
    }


    document.getElementById("medName").value = ""
    document.getElementById("qntDisp").value = ""
    document.getElementById("medClasse").value = ""

    meds.push(med)

    renderTable()
}

function renderTable() {

    let table = document.getElementById("dataTable")

    table.innerHTML = `<tr>
                            <th>ID</th>
                            <th>Medicamento</th>
                            <th>Quantidade</th>
                            <th>Classe</th>
                            <th>Remover</th>
                        </tr>`
                        

    for (let i = 0; i < meds.length; i++) {
        table.innerHTML = table.innerHTML + `<td>${i}</td>
        <td>${meds[i].nomeMed}</td>
        <td>${meds[i].qntd}</td>
        <td>${meds[i].medClasse}</td>
        <td><img src="./assets/remove.svg" width="25px" height="25px" onclick="removeMed(${i})"></td>`
    }
}

function removeMed(indice) {
    meds.splice(indice, 1)

    renderTable()
}