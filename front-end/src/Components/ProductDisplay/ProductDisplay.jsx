import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Products/star_icon.png'
import star_dull_icon from '../Products/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  
  const handleSizeClick = (id) => {
    // Remove the active class from all size options
    document.querySelectorAll('.productdisplay-right-size-option').forEach(div => {
      div.classList.remove('active');
    });
  
    // Add the active class to the clicked size option
    const clickedDiv = document.getElementById(id);
    clickedDiv.classList.add('active');
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          {product.is_discount === true
            ?
            <div className="productdisplay-right-price-new-sale">{product.new_price}</div>
            :
            <div className="productdisplay-right-price-new">{product.new_price}</div>
          }
          <div className="productdisplay-right-price-old">{product.old_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        {product.type === "clothing" ?
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div onClick={(e)=>handleSizeClick(e.target.id)} id='s' className="productdisplay-right-size-option">S</div>
              <div onClick={(e)=>handleSizeClick(e.target.id)} id='m' className="productdisplay-right-size-option">M</div>
              <div onClick={(e)=>handleSizeClick(e.target.id)} id='l' className="productdisplay-right-size-option">L</div>
              <div onClick={(e)=>handleSizeClick(e.target.id)} id='xl' className="productdisplay-right-size-option">XL</div>
              <div onClick={(e)=>handleSizeClick(e.target.id)} id='xxl' className="productdisplay-right-size-option">XXL</div>
            </div>
          </div>
          :
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
              {product.category === "men"
                ?
                  <div className="productdisplay-right-sizes"> 
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 6' className="productdisplay-right-size-option">6</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 6.5' className="productdisplay-right-size-option">6.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 7' className="productdisplay-right-size-option">7</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 7.5' className="productdisplay-right-size-option">7.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 8' className="productdisplay-right-size-option">8</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 8.5' className="productdisplay-right-size-option">8.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 9' className="productdisplay-right-size-option">9</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 9.5' className="productdisplay-right-size-option">9.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 10' className="productdisplay-right-size-option">10</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 10.5' className="productdisplay-right-size-option">10.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 11' className="productdisplay-right-size-option">11</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 11.5' className="productdisplay-right-size-option">11.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 12' className="productdisplay-right-size-option">12</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 12.5' className="productdisplay-right-size-option">12.5</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 13' className="productdisplay-right-size-option">13</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 14' className="productdisplay-right-size-option">14</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 15' className="productdisplay-right-size-option">15</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 16' className="productdisplay-right-size-option">16</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 17' className="productdisplay-right-size-option">17</div>
                    <div onClick={(e)=>handleSizeClick(e.target.id)} id='m size 18' className="productdisplay-right-size-option">18</div>
                  </div>
                :
                  (product.category === "women"
                    ?
                      <div className="productdisplay-right-sizes"> 
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 5' className="productdisplay-right-size-option">5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 5.5' className="productdisplay-right-size-option">5.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 6' className="productdisplay-right-size-option">6</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 6.5' className="productdisplay-right-size-option">6.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 7' className="productdisplay-right-size-option">7</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 7.5' className="productdisplay-right-size-option">7.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 8' className="productdisplay-right-size-option">8</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 8.5' className="productdisplay-right-size-option">8.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 9' className="productdisplay-right-size-option">9</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 9.5' className="productdisplay-right-size-option">9.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 10' className="productdisplay-right-size-option">10</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 10.5' className="productdisplay-right-size-option">10.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 11' className="productdisplay-right-size-option">11</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 11.5' className="productdisplay-right-size-option">11.5</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='w size 12' className="productdisplay-right-size-option">12</div>
                      </div>
                    :
                      <div className="productdisplay-right-sizes"> 
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 3.5' className="productdisplay-right-size-option">3.5Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 4' className="productdisplay-right-size-option">4Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 4.5' className="productdisplay-right-size-option">4.5Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 5' className="productdisplay-right-size-option">5Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 5.5' className="productdisplay-right-size-option">5.5Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 6' className="productdisplay-right-size-option">6Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 6.5' className="productdisplay-right-size-option">6.5Y</div>
                        <div onClick={(e)=>handleSizeClick(e.target.id)} id='k size 7' className="productdisplay-right-size-option">7Y</div>
                      </div>
                  )
                }
          </div>
        }
        <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
      </div>
    </div>
  )
}
export default ProductDisplay