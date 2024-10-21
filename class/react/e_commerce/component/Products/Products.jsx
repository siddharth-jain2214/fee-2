import React, { useState } from 'react'
import './Products.css'
const Products = (props) => {

    let [price,setPrice]=useState(props.price);
    let handlePrice=()=>{
        setPrice(10);
    }
  return (
    <figure className='product' onClick={handlePrice}>
        <img src={props.imgUrl} alt={props.name} />
        <h1>{props.name}</h1>
        <h2>Price: Rs{price}/-</h2>
    </figure>
  )
}

export default Products
