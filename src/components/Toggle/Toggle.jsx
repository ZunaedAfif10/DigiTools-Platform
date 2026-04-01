import React, { use, useState } from 'react'
import { Products } from './Products';
import { Cart } from './Cart';

export const Toggle = ({promiseProduct , selectedType ,setSelectedType}) => {
  const products = use(promiseProduct);
//  console.log(selectedType);
  const [cartItem,setCartItem] = useState([]);
  return (
    <div className='mt-32 mb-32 text-center'>
      <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
      <p className='text-gray-500 py-5'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      <div className='border inline-block border-gray-200 rounded-4xl p-0.5'>
        <button onClick={()=>setSelectedType('products')} className={`btn ${selectedType=== 'products' ? 'bg-[#4F39F6] text-white' : 'bg-white text-black border-0'}  rounded-3xl px-5 py-6`}>Products</button>
        <button onClick={()=>setSelectedType('cart')} className={`btn ${selectedType=== 'cart' ? 'bg-[#4F39F6] text-white' : 'bg-white text-black border-0'}  rounded-3xl px-5 py-6`}>Cart({cartItem.length})</button>
      </div>
      {selectedType==='products' ? <Products products={products} cartItem={cartItem} setCartItem={setCartItem}></Products> : <Cart products={products} cartItem={cartItem} setCartItem={setCartItem}></Cart>}
    </div>
  )
}
