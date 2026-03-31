import React from 'react'
import { Item } from '../ui/Item';

export const Cart = ({products , cartItem , setCartItem}) => {
  // console.log(cartItem);
  let total=0;
  return (
    <div className='container mx-auto mt-10 border border-gray-200 rounded-xl text-left p-10 font-bold text-2xl'>
      <h2>Your Cart</h2>
      <div>
        {
          cartItem.map(item=>{
            total += item.price
            return <Item item={item} cartItem={cartItem} setCartItem={setCartItem} total={total}></Item>
          })
        }
      </div>
      <p>Total</p>
      <p className='text-right'></p>
    </div>
  )
}
