import { Link } from 'react-router-dom';
import { RiArrowRightUpLine } from "react-icons/ri";
import { categories } from '../../data/products';
import type { JSX } from 'react';

type Category = {
    id: string;
    name: string;
    description: string;
    image: string;
    count: number;
}
const CategoriesSection = () : JSX.Element => {
  return (
    <section className="categories-section">
      <div className="container">
        {/* Header */}
        <div className="header">
          <span>Browse By</span>
          <h2>
            SHOP CATEGORIES
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="categories-container">
          {categories.map((category:Category, index:number): JSX.Element => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="category-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
              />
              
              <div className="gradient-overlay" />
              
              <div className="category-info">
                <div className="category-info-content">
                  <div>
                    <h3>
                      {category.name}
                    </h3>
                    <p>
                      {category.count} Products
                    </p>
                  </div>
                  <div className="arrow-icon">
                    <RiArrowRightUpLine className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
