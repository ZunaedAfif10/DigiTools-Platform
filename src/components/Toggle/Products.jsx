import React from 'react'
import { Product } from './Product.jsx'

export const Products = ({products , cartItem , setCartItem}) => {
    // console.log(products);
    return (
        <div className='container grid lg:grid-cols-3 mx-auto mt-10'>
        {
        products.map(product=>{
            return <Product product={product} key={product.id} cartItem={cartItem} setCartItem={setCartItem}></Product>    
        })
        }
        </div>
    )
}
