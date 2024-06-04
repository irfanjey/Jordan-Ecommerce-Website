import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  let location = useLocation();

  const handleClick = () => {
    if (location.pathname !== `/product/${props.id}`) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}>
            <img onClick={handleClick} src={props.image} alt="" />
        </Link>
        {props.discount === true && 
          <div className="item-sale">
            <p>Sale</p>
          </div>
        }
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                <p>{props.new_price}</p>
            </div>
            <div className='item-price-old'>
                <p>{props.old_price}</p>
            </div>
        </div>
    </div>
  )
}

export default Item;
