import React from 'react'
import { Item } from '../ui/Item';

export const Cart = ({ products, cartItem, setCartItem }) => {
  // console.log(cartItem);
  const deleteAll = () => {
    setCartItem([]);
  }
  let total = 0;
  return (
    <div className='container mx-auto mt-10 border border-gray-200 rounded-xl text-left p-10 font-bold text-2xl'>
      <h2>Your Cart</h2>
      <div>
        {
          cartItem.map(item => {
            total += item.price
            return <Item item={item} cartItem={cartItem} setCartItem={setCartItem} ></Item>
          })
        }
      </div>
      <div className='flex justify-between'>
        <p className='font-normal text-gray-500'>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button onClick={deleteAll} className="btn btn-primary btn-block rounded-3xl py-6 text-xl font-bold mt-5">Proceed to Checkout</button>
    </div>
  )
}
