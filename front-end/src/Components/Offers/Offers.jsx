import React from 'react'
import './Offers.css'
import data_trend from '../Products/data_bestseller'
import Item from '../Items/Item_cover'

const Offers = () => {
  return (
    <div class='offers'>
        <h1>TRENDING SHOES</h1>
        <hr/>
        <div className="offers-item">
          {data_trend.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
          })}
        </div>
        <div className="shop-btn">
          <button>View More</button>
        </div>
    </div>
  )
}

export default Offers