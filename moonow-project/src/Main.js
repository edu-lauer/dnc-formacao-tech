import React, { useState } from "react"

import './Main.css'
import rocket from './assets/img/rocket.svg'


function Main() {

    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')

    return (
        <main>
            <section className="form-container">
                <h1 className='text-form-container'>INSCREVA-SE E VIAJEM PARA A LUA GRATUITAMENTE</h1>
                <form className='form-form-container'> 
                    <input className='input-form-container name-field' placeholder='Nome completo' value={name} onChange={(event) => {
                        setNome(event.target.value)

                        const nameField = document.querySelector('.name-field')

                        if (nameField.value === '') {
                            document.querySelector('#nameError').innerText = 'Campo obrigatório'
                            document.querySelector('#nameError').style.color = 'red'
                        } else {
                            document.querySelector('#nameError').innerText = ''
                        }

                    }}></input>
                    <span id="nameError"></span>
                    <input className='input-form-container email-field' placeholder='Email' value={email} onChange={(event) => {
                        setEmail(event.target.value)
                        
                        const emailField = document.querySelector('.email-field')

                        if (emailField.value === '') {
                            document.querySelector('#emailError').innerText = 'Campo obrigatório'
                            document.querySelector('#emailError').style.color = 'red'
                        } else {
                            document.querySelector('#emailError').innerText = ''
                        }
                        
                    }}></input>
                    <span id="emailError"></span>
                </form> 
                <div className='btns-form-container'>
                    <button className='btn-qipl-form-container' onClick={() => {


                        const nameField = document.querySelector('.name-field')
                        const emailField = document.querySelector('.email-field')
                        
                        if ((nameField.value || emailField.value) === '') {

                            document.querySelector('#nameError').innerText = 'Campo obrigatório'
                            document.querySelector('#nameError').style.color = 'red'

                            document.querySelector('#emailError').innerText = 'Campo obrigatório'
                            document.querySelector('#emailError').style.color = 'red'
                        } else {
                            const finalSpan = document.querySelector('#final-span')
                            
                            finalSpan.innerText = 'Formulário enviado com sucesso!'
                            finalSpan.style.color = 'green'
                        }
                    }}>Quero ir pra lua!</button>
                    <button className='btn-info-form-container'>Mais informações</button>
                </div>
            </section>

            <section className="img-container">
                <img src={rocket} alt="foguete em uma pessoa em cima subindo em direção a lua"></img>
            </section>
            <span id="final-span"></span>
        </main>
    );
}

export default Main;