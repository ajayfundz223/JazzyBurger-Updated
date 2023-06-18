import React from 'react'
import { useContext } from 'react';
import { dataContextCreated } from '../contextData/DataContext';

const Counter = ({ product}) => {
  const {handleIncrease,handleReduce} = useContext(dataContextCreated);
  return (
    <div className='counter'>
        <button onClick={()=>handleReduce(product.id)} >-</button>
        <label>{product.count}</label>
        <button onClick={()=>handleIncrease(product.id)}>+</button>
    </div>
  )
}

export default Counter