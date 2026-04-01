import React from 'react'
import { Item } from '../ui/Item';
import shop from '../../assets/products/shop1.jpg'
import { toast } from 'react-toastify';

export const Cart = ({ products, cartItem, setCartItem }) => {
  // console.log(cartItem);
  const deleteAll = () => {
    toast.success('Items Checked out');
    setCartItem([]);
  }
  let total = 0;
  return (
    <div className='container mx-auto lg:mt-10 mt-6 border border-gray-200 rounded-xl text-left px-3 py-5 lg:p-10 font-bold text-2xl mb-10'>
      <h2 className='lg:text-left text-center'>Your Cart</h2>
      {cartItem.length === 0 ?
      <>
      <div className='p-20'>
        <img src={shop} height={200} width={200} className='mx-auto' alt="" />
        <p className='text-center'>Your cart is empty</p>
      </div>
      </> :
      <>
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
      </>}
    </div>
  )
}
