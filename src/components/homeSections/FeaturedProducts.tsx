import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { products, type Product } from './../../data/products';
import ProductCard from '../productCard/ProductCard';
import './homeSections.css';
import type { JSX } from 'react';

const FeaturedProducts = () : JSX.Element => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="featured-products">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div>
            <span className="pick">Top Picks</span>
            <h2 className="title">
              FEATURED PRODUCTS
            </h2>
          </div>
          <Link to="/shop" className='view-all-btn'>
            <button className="btn" >
              View All Products
              <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="products-container">
          {featuredProducts.map((product:Product) : JSX.Element => (
            <div
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
