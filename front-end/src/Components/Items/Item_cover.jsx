import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div class='item'>
        <img src={props.image} alt="" />
        {props.discount === true && 
          <div className="item-sale">
            <p>Sale</p>
          </div>
        }
        <p>{props.name}</p>
        <div class='item-prices'>
            <div class='item-price-new'>
                <p>{props.new_price}</p>
            </div>
            <div class='item-price-old'>
                <p>{props.old_price}</p>
            </div>
        </div>
    </div>
  )
}

export default Item