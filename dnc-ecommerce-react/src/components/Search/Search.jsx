import React from 'react'
import "./search.scss"
import searchLogo from "../../assets/search.png"
import favoriteLogo from "../../assets/heart.png"
import profileLogo from "../../assets/profile.png"

const Search = () => {
    return (
        <div className='search'>
            <div className="search__input-container">
                <img src={searchLogo} alt="lupa de busca" className='search__search-logo' />
                <input type="text" placeholder='Search'/>
            </div>
            <img src={profileLogo} alt="imagem da logo" />
            <img src={favoriteLogo} alt="imagem do icone de um coração de favorito" />
        </div>
    )
}

export default Search