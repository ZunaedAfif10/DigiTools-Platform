import React from 'react'
import { toast } from 'react-toastify';

export const Item = ({ item, cartItem, setCartItem}) => {
    // console.log(item);
    const deleteItem = ()=>{
        const updatedCart = cartItem.filter(ci => ci !== item);
        toast.success('Item removed');
        setCartItem(updatedCart);
    }
    // console.log(total); 
    return (
        <div className='mt-6'>
            <div className='p-6 bg-[#F9FAFC] mb-4 rounded-xl flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='border bg-white border-gray-200 rounded-full p-2' height={50} width={50} src={item.image} alt="" />
                    <div>
                        <h2>{item.name}</h2>
                        <p className='font-medium text-[1.1rem] mt-2 text-gray-500'>${item.price}</p>
                    </div>
                </div>
                    <button onClick={deleteItem} className='font-medium text-[1.1rem] mt-2 text-[#FF3980]'>Remove</button>
            </div>
        </div>
    )
}
