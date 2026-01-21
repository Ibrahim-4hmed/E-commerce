import { useState, type JSX } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { MdMenu } from "react-icons/md";
import { FiX } from "react-icons/fi";
import { useCartContext } from '../../context/CartContext';
import NavLinks from './NavLink'
import Menu from '../ui/Menu';


function Header(): JSX.Element {
   const { cartItemCount, favorites } = useCartContext();
   const [isMenuOp, setIsMenuOp] = useState(false);

   const handlMenu = () => {
    setIsMenuOp(prev => !prev)
   }

  return (
    <div className='header-component'>

      {/* Menu */}
        {isMenuOp && <Menu />}

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
          <div className="icon menu-icon" onClick={() => handlMenu()}>
            {isMenuOp ? <FiX /> : <MdMenu /> }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header