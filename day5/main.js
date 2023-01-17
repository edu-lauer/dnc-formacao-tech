function openModal(modalName) {
    let modal = document.getElementById(modalName)
    let mainContainer = document.getElementById('main-container')
    
    if (typeof modal == 'undefined' || modal == null) {
        return;
    } else {
        modal.style.display = 'Block'
        mainContainer.classList.add("opacidade")
    }
}


function closeModal(modalName) {
    let modal = document.getElementById(modalName)
    let mainContainer = document.getElementById('main-container')

    modal.style.display = 'none'
    mainContainer.classList.remove("opacidade")
    
}

const liEls = document.querySelectorAll('.carouselList li')
let index = 0

function show(increase) {
    index = index + increase
    index = Math.min(Math.max(index, 0), liEls.length -1)
    liEls[index].scrollIntoView({behavior:"smooth"})
}