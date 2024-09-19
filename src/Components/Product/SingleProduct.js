import React from 'react'
import { useLocation } from 'react-router-dom';

function SingleProduct() {

    const {state}=useLocation();
    

  return (
    <>
      <main className='product-containe'>
        <div>Hi1</div>
        <img src={state?.image}/>
        <div>{state?.price}</div>
      </main>
    </>
  )
}

export default SingleProduct
