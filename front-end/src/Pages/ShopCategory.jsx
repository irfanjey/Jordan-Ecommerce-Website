import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Products/dropdown_icon.png'
import Item from '../Components/Items/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className="shop-category">
        {props.category === "men" && 
          <div className='gender_category'>
            Men's Category
            <hr/>
          </div>
        }
        {props.category === "women" && 
          <div className='gender_category'>
            Women's Category
            <hr/>
          </div>
        }
        {props.category === "kid" && 
          <div className='gender_category'>
            Kids' Category
            <hr/>
          </div>
        }
        <div className="shopcategory-indexsort">
          <p>
            <span>Showing 1-12</span> out of 12 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} discount={item.is_discount} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
    </div>
  )
}

export default ShopCategory