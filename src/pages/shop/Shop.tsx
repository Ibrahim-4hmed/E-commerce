import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { LuSlidersHorizontal } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";
import { products, categories } from '../../data/products';
import ProductCard from '../../components/productCard/ProductCard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "./shop.css"

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: 'Over $200', min: 200, max: Infinity },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPriceRange = parseInt(searchParams.get('price') || '0');

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '0') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Price filter
      const priceRange = priceRanges[selectedPriceRange];
      if (product.price < priceRange.min || product.price > priceRange.max) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 0 || searchQuery;

  return (
    <div className="shop-page page">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              SHOP <span>ALL</span>
            </h1>
            <p>
              Discover our complete collection of premium soccer gear. From elite footwear to professional kits and accessories.
            </p>
          </div>
        </section>

        <div className="container">
          {/* Search & Filter Bar */}
          <div className="search-filter-bar">
            <div className="input-group">
              <IoSearchOutline className="search-icon" />
              <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {hasActiveFilters && (
              <button onClick={clearFilters} className="clear-filters-button">
                <MdOutlineClear />
                Clear Filters
              </button>
            )}
          </div>

          <div className="content-area">
            {/* Sidebar Filters */}
            <aside className={`aside-filters
              ${showFilters ? "show-filter" : "hide-filter"}`}
            >
              {showFilters && (
                <div className="aside-header">
                  <h3 className="font-display text-xl">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <MdOutlineClear className="w-5 h-5" />
                  </button>
                </div>
              )}
              
              {/* Categories */}
              <div className='categories-area'>
                <h3>Categories</h3>
                <div className="all-categories">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`
                      category-button
                      ${selectedCategory === 'all'
                        ? "selected-category"
                        : "not-selected-category"
                      }
                    `}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={`category-button
                      ${selectedCategory === category.id
                          ? "selected-category"
                          : "not-selected-category"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className='price-ranges'>
                <h3>Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', index.toString())}
                      className={`
                        price-button
                        ${selectedPriceRange === index
                          ? "selected-price"
                          : "not-selected-price"
                        }
                      `}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="products-grid">
              <div className="products-header">
                <p>
                  Showing <span>{filteredProducts.length}</span> products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-content">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-products-content">
                  <p>No products found matching your criteria.</p>
                  <button onClick={clearFilters} className='clear-btn'>
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
