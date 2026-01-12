import { Link } from 'react-router-dom';
// import { Heart, ShoppingBag, Star } from 'lucide-react';
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import type { Product } from '../../data/products';
import { FaStar } from "react-icons/fa6";
import { useCartContext } from '../../context/CartContext';
import './productCard.css'


interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { toggleFavorite, isFavorite, addToCart } = useCartContext();
  const favorite = isFavorite(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-card"
    >
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
            <span >
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
        <div className="quick-add-btn">
          <button
            onClick={handleQuickAdd}
            className="quick-button btn" 
            // variant="accent"
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
  );
};

export default ProductCard;
