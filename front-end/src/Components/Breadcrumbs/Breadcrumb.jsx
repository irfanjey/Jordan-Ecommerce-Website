import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Products/breadcrumb_arrow.png'
const Breadcrumb = (props) => {
  const {product} = props; // same as const product = props.product; since {} are used for deconstructing
  return (
    <div className="breadcrumb">
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumb