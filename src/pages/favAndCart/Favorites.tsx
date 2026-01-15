import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import Button  from '../../components/button/Button';
import { useCartContext } from '../../context/CartContext';
import "./favAndCart.css"
import type { JSX } from 'react';
import type { Product } from '../../data/products';

const Favorites = () :JSX.Element => {
  const { favorites, clearFavorites } = useCartContext();

  if (favorites.length === 0) {
    return (
      <div className="page favorites-page no-fav">
        <Header />
        <main className='container'>
          <FaRegHeart className="icon" />
          <h1>No Favorites Yet</h1>
          <p>
            Start adding products to your favorites to see them here.
          </p>
          <Link to="/shop">
            <Button  className={["color", "btn"]}>
              Explore Products
              <LuArrowRight />
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="favorites-page page">
      <Header />
      
      <main>
        <div className="container">
          <div className="head-section">
            <h1>
              YOUR <span>FAVORITES</span>
            </h1>
            <button onClick={clearFavorites} className='btn'> 
              Clear All
            </button>
          </div>

          <div className="fav-products">
            {favorites.map((product: Product ) => (
              <div
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
