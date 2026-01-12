import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { FiChevronLeft,FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import Button  from '../../components/button/Button';
import { products } from '../../data/products';
// import { useCartContext } from '@/context/CartContext';
// import { useToast } from '@/hooks/use-toast';
import toast from "react-hot-toast";
import "./productDetails.css"


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { toast } = useToast();
  // const { addToCart, toggleFavorite, isFavorite } = useCartContext();
  
  const product = products.find((p) => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <Header />
        <main>
          <div className='container'>
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button className={["color","small"]}>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // const favorite = isFavorite(product.id);
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }

    // addToCart(product, selectedSize, selectedColor, quantity);
    // toast.success("Added to cart");
  };

  // const handleFavorite = () => {
  //   toggleFavorite(product);
  //   toast.error("Removed from Favorites")
  //   toast.success("Added to Favorites")
  // };

  return (
    <div className="product-details min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="container">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="back-btn"
          >
            <FiChevronLeft className="w-4 h-4" />
            Back
          </button>

          <div className="product-section">
            {/* Images */}
            <div className="images">
              <div className="main-img-card">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="related-imgs">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className=
                        {` 
                        ${selectedImage === index
                          ? "selected"
                          : "not-selected"}`
                        }
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="info">
              {/* Rating */}
              <div className="rating">
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaRegStar
                      key={i}
                      className={`
                        ${i < Math.floor(product.rating)
                          ? "fill"
                          : "not-fill"}
                      `}
                    />
                  ))}
                </div>
                <span className="raite">{product.rating}</span>
                <span className="reviews">({product.reviews} reviews)</span>
              </div>

              {/* Title & Price */}
              <div className='title'>
                <p>
                  {product.category}
                </p>
                <h1>{product.name}</h1>
                <div className="pricing">
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

              {/* Description */}
              <p className="desc">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <div className="select-size">
                  <span className="title">Select Size</span>
                  <a href="#" className="guide">
                    Size Guide
                  </a>
                </div>
                <div className="sizes">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        ${selectedSize === size
                          ? "selected"
                          : ""}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className='select-color'>
                <span className="title">Select Color</span>
                <div className="colors">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`
                        ${selectedColor === color
                          ? "selected"
                          : ""}
                      `}
                    >
                      {selectedColor === color && <FaCheck className="check-icon" />}
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className='quantity'>
                <span className="title">Quantity</span>
                <div className="quantity-content">
                  <div className="icon-container">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <FiMinus />
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <GoPlus  />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="actions">
                <button
                  onClick={handleAddToCart}
                  className="add-to-cart"
                >
                  <CgShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  // onClick={handleFavorite}
                  className="heart-icon"
                >
                  {/* <IoMdHeartEmpty className={`"w-5 h-5", ${favorite && "fill-current"}`} /> */}
                  <IoMdHeartEmpty />
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="related-products">
              <h2 className="title">Related Products</h2>
              <div className="products">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
