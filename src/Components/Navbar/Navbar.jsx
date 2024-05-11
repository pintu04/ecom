import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import down_arrow from "../Assets/down.png"
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
         menuRef.current.classList.toggle('nav-menu-visible');
         e.target.classList.toggle('open')
    }

  return (
    <div className='Navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='nav-logo' />
            <p>Dukaan</p>
        </div>
        <img onClick={dropdown_toggle} src={down_arrow} alt='' className='down-arrow-sort'/>
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() => {setMenu("shop")}}> <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("mens")}}> <Link style={{textDecoration: 'none', color: 'black'}} to='/mens'>Men</Link> {menu==="mens"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("womens")}}> <Link style={{textDecoration: 'none', color: 'black'}} to='/womens'>Women</Link> {menu==="womens"?<hr />:<></>}</li>
            <li onClick={() => {setMenu("kids")}}> <Link style={{textDecoration: 'none', color: 'black'}} to='/kids'>Kids</Link> {menu==="kids"?<hr />:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt='cart-icon' /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
