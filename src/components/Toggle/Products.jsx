import React from 'react'
import { Product } from './Product.jsx'

export const Products = ({products}) => {
    // console.log(products);
    return (
        <div className='container grid grid-cols-3 mx-auto mt-10'>
        {
        products.map(product=>{
            console.log(product);
            return <div>
            <Product product={product} key={product.id}></Product>    
        </div>
        })
        }
        </div>
    )
}
