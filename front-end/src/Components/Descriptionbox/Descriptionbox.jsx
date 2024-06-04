import React from 'react'
import './Descriptionbox.css'

const Descriptionbox = (props) => {
  const {product} = props;
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>{product.description}</p>
            <p>Colour: {product.color}</p>
        </div>
    </div>
  )
}
export default Descriptionbox