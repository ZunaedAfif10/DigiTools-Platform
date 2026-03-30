import React, { use } from 'react'

export const Product = ({promiseProduct}) => {
    const data = use(promiseProduct);
    console.log(data); 
  return (
    <div>Product</div>
  )
}
