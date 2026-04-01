import React from 'react'
import wri from '../../assets/products/writing.png'
import { SiTicktick } from 'react-icons/si'
import { Feature } from '../ui/Feature';
import { toast } from 'react-toastify';
export const Product = ({product ,cartItem , setCartItem}) => {
  const buyNow = ()=>{
    // console.log('iem',product);
    const isFound = cartItem.find(it=>it.id === product.id);
    if(isFound)
    {
      toast.error('Item already in the cart');
      return;
    }
    toast.success('Item succesfully added');
    setCartItem([...cartItem,product]);
  }
  // console.log(product.tag);
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body relative">
        <img className='border border-gray-200 rounded-full p-2' src={product.image} height={50} width={50} alt="" />
        <span className={`badge badge-md rounded-4xl absolute top-2 right-2 ${product.tag === 'New' ? 'badge-accent' : product.tag === 'Popular' ? 'badge-info' : 'badge-warning'}`}>{product.tag}</span>
        <div className='text-left space-y-4 mt-2'>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className='text-gray-500 text-[1.02rem]'>{product.description}</p>
          <h2 className="text-3xl font-bold">${product.price}<span className='text-gray-500 text-[1.02rem]'>/{product.period}</span></h2>
        </div>
        <ul className='mt-3'>
          <li>
            {
            product.features.map((feature,ind)=>{
              return <Feature feature={feature} key={ind}></Feature>
            })
            }
          </li>
        </ul>
        <div className="mt-3">
          <button onClick={()=>buyNow()} className="btn btn-primary btn-block rounded-3xl py-6">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

