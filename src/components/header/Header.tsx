import { type JSX } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useCartContext } from '../../context/CartContext';
import NavLinks from './NavLink'


function Header(): JSX.Element {
   const { cartItemCount, favorites } = useCartContext();

  return (
    <div className='header-component'>
      <div className="container header-container">

        <div className='logo-div'>
          <span className='k'>K</span>
          <Link to='/' className='logo'>KICK<span>ZONE</span></Link>
        </div>

        <NavLinks />

        <div className="header-icons">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItemCount}</span>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Header