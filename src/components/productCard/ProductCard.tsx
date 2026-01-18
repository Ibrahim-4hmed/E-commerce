import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import type { Product } from '../../data/products';
import { FaStar } from "react-icons/fa6";
import { useCartContext } from '../../context/CartContext';
import './productCard.css'
import toast from 'react-hot-toast';
import type { JSX } from 'react';
import type { CartItem } from '../../hooks/useCart';


interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product }: ProductCardProps):JSX.Element => {
  const { toggleFavorite,isFavorite, addToCart,cartItems } = useCartContext();
  const favorite: boolean = isFavorite(product.id);
  const isInCart = cartItems.some((i: CartItem) => i.id === product.id);
  

  const handleQuickAdd = (e: React.MouseEvent):void => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
    toast.success(
      <div className="toast-wrapper">
        <h4 className="toast-title">Success!</h4>
        <p className="toast-message">Added To Cart</p>
      </div>,
      { duration: 3500 }
    );
  };

  const handleFavorite = (e: React.MouseEvent):void => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className={`product-card ${isInCart ? "inCart" : ""}`}>
    <Link 
      to={`/product/${product.id}`}
    >
      {/* itme stat  */}
      <span className="item-status">
          {" "}
          <FaCheckCircle /> in cart{" "}
        </span>

      {/* Image */}
      <div className="img-container">
        <img
          src={product.image}
          alt={product.name}
        />
        
        {/* Badges */}
        <div className="badges">
          {product.originalPrice && (
            <span style={{ backgroundColor: "orangered" }}>
              Sale
            </span>
          )}
          {product.featured && (
            <span style={{ backgroundColor: "greenred" }}>
              Featured
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className={`favorite-btn ${favorite
              ? "favorite"
              : "not-favorite"}`}
        >
          <FaRegHeart />
        </button>

        {/* Quick Add */}
        <div className="btn-container">
          <button
              onClick={handleQuickAdd}
              className={`btn quick-button`}
            >
              <RiShoppingBag3Line />
              Quick Add
            </button>
        </div>

      </div>

      {/* Info */}
      <div className="info">
        <div className="stars-rating">
          <FaStar />
          <span className="rating">{product.rating}</span>
          <span className="rating">({product.reviews})</span>
        </div>
        
        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="category">
          {product.category}
        </p>

        <div className="price-section">
          <span className="price">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="original-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProductCard;
