import React from 'react'
import { useParams } from 'react-router-dom'
import "./products.scss"
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import Menu from '../../components/Menu/Menu'
import Search from '../../components/Search/Search'

const Products = ({ data }) => {

    const { productId } = useParams();
    const selectedProduct = data.find((product) => product.id == productId);

    return (
        <section className='products'>
            <Menu />    
            <Search />
            <ProductDetail data={ selectedProduct }/>
        </section>
    )
}

export default Products