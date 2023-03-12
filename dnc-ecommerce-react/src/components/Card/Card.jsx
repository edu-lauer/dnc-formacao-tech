import React from 'react'
import { Link } from 'react-router-dom'
import "./card.scss"

const Card = ({ data }) => {
    return (
        <div className='home__card'>
            <img src={ data.imgPath } alt="modelo vestindo a roupa da descrição" />
            <div className='home__card-description'>
                <p>{ data.title }</p>
                <button>
                    <Link to={`/products/${ data.id }`}>Comprar Look</Link>
                </button>
            </div>
        </div>
    )
}

export default Card