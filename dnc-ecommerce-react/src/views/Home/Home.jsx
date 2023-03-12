import React from 'react'
import "./home.scss"
import { Link } from "react-router-dom"
import Menu from '../../components/Menu/Menu'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'

const Home = ({ data }) => {
    return (
        <div className='home'>
            <Menu />    
            <Search />

            <div className='home__cards'>
                {
                    data.map((product) => (<Card key={product.id} data={ product }/>))
                }
            </div>
        </div>
    )
}

export default Home