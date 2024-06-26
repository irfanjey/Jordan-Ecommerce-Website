import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './ProductList.css'
import cross_icon from '../../assets/cross_icon.png'

const ProductList = () => {
  
  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })

    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Listing Price</p>
        <p>Old Price</p>
        <p>Category</p>
        <p>Type</p>
        <p>Colour</p>
        <p>Description</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr/>
        {allproducts.map((product,index)=>{
          return <><div key={index} className="listproduct-format-main listproduct-format">
            <img className='listproduct-product-icon' src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.new_price}</p>
            <p>{product.old_price}</p>
            <p>{product.category}</p>
            <p>{product.type}</p>
            <p>{product.color}</p>
            <p>{product.description}</p>
            <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default ProductList