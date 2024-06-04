import React from 'react'
import {useState} from 'react'
import './Navbar.css'
import logo from '../Products/logo_jordan.png'
import cart_icon from '../Products/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className = 'logo'>
            <Link to='/'>
                <img onClick={()=>{setMenu("shop")}} className = 'img_logo' src={logo} alt="" />
            </Link>
        </div>
        <div>
            <ul className = 'menu-bar'>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'white'}} to= '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: 'white'}} to= '/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: 'white'}} to= '/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: 'white'}} to= '/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
        </div>
        <div className='login-cart'>
            {localStorage.getItem('auth-token')
                ?
                <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                :
                <Link to= '/login'>
                    <button>Login</button>
                </Link>
            }
            <Link to= '/cart'>
                <img src={cart_icon} alt="" />
            </Link>
            <div className='cart-counter'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
