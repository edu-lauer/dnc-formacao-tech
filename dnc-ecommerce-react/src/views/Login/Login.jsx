import React from 'react'
import "./login.scss"
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'

const Login = () => {
    return (
        <section className='login'>
            <Header />
            <section className='login__form'>
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>Você pode entrar com seu CPF</h2>
                <div className='login__input-wrapper'>
                    <label htmlFor='name'>Digite seu CPF:</label>
                    <input type="text" placeholder='Nome completo' id="name" className='login__input-name'></input>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id='password' placeholder='**********'/>                   
                </div>
                <button type='submit'>
                    <Link to={"/home"}>Entrar</Link>
                </button>
            </section>
        </section>
    )
}

export default Login