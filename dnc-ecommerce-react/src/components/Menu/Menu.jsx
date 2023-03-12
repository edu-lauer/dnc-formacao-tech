import React from 'react'
import "./menu.scss"
import logoDnc from '../../assets/logo-dnc.png'
import cartLogo from '../../assets/cartshop.png'

const Menu = () => {
    return (
        <header className='header-menu'>
            <img src={logoDnc} alt="logo da escola dnc  " className='header-menu__logo' />
            <ul>
                <li>Home</li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>
            <div className='header-menu__cart-shop'>
                <h1>Meu carrinho</h1>
                <img src={cartLogo} alt="cartLogo" />
            </div>
        </header>
    )
}

export default Menu