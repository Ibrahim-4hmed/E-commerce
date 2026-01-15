import { Link } from 'react-router-dom';
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button  from '../../components/button/Button';
import { useCartContext } from '../../context/CartContext';
import "./favAndCart.css"
import type { JSX } from 'react';
import type { CartItem } from '../../hooks/useCart';

const Cart = (): JSX.Element => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCartContext();

  if (cartItems.length === 0) {
    return (
      <div className="page cart-page cart-empty">
        <Header />
        <main className='container'>
          <RiShoppingBag3Line className="icon" />
          <h1>Your Cart is Empty</h1>
          <p>
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/shop">
            <Button  className={["color", "btn"]}>
              Start Shopping
              <FiArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <Header />
      
      <main>
        <div className="container">
          <div className="head-section">
            <h1>
              YOUR <span>CART</span>
            </h1>
            <button onClick={clearCart} className='btn'> 
              Clear Cart
            </button>
          </div>

          <div className="content">
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item: CartItem): JSX.Element => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="item"
                >
                  <Link to={`/product/${item.product.id}`} className='img-container' >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                    />
                  </Link>

                  <div className="details">
                    <Link to={`/product/${item.product.id}`}>
                      <h3>
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="size-color">
                      Size: {item.size} • Color: {item.color}
                    </p>
                    <p className="price">
                      ${item.product.price.toFixed(2)}
                    </p>

                    <div className="buttom">
                      <div className="counts">
                        <button
                          onClick={():void =>
                            updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                          }
                        >
                          <TiMinus />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={():void =>
                            updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                          }
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <button
                        onClick={():void => removeFromCart(item.product.id, item.size, item.color)}
                        className="remove-btn"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <div className="order-card">
                <h2 className="title">Order Summary</h2>

                <div className="order-info">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="shipping">
                    <span>Shipping</span>
                    <span>{cartTotal >= 100 ? 'Free' : '$9.99'}</span>
                  </div>
                  <div className="tax">
                    <span>Tax</span>
                    <span>${(cartTotal * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="total">
                    <div className="total-price">
                      <span>Total</span>
                      <span className="text-primary">
                        ${(cartTotal + (cartTotal >= 100 ? 0 : 9.99) + cartTotal * 0.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="checkout-btn btn">
                  Proceed to Checkout
                  <FiArrowRight />
                </button>

                <p className="note">
                  Free shipping on orders over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
