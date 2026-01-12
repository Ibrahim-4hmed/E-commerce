import { Link } from 'react-router-dom';
import { GoZap } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import Button from '../button/Button';
import './homeSections.css'
import type { JSX } from 'react';

const HeroSection = (): JSX.Element => {
  return (
    <div className="container">
      <div className="hero-container">
        {/* Content */}
        <div className="content">
          <div className="new-season">
            <GoZap className="" />
            <span >New Season Collection 2026</span>
          </div>

          <h1 className="hero-text">
            UNLEASH YOUR <br />
            <span className="potential">POTENTIAL</span>
          </h1>

          <p className="hero-subtitle">
            Premium soccer gear designed for champions. Elevate your game with cutting-edge technology and unmatched style.
          </p>

          <div className="hero-buttons">
            <Link to="/shop">
              <Button className={["color" , "btn"]}> 
                Shop Now
                <FaArrowRight />
              </Button>
            </Link>
            <Link to="/shop?category=shoes">
              <Button className={["btn"]}>
                Explore Shoes
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className='state'>
            {[
              { value: '50K+', label: 'Happy Players' },
              { value: '200+', label: 'Products' },
              { value: '4.9', label: 'Rating' },
            ].map((stat: { value: string; label: string }): JSX.Element => (
              <div key={stat.label} className="stat-item">
                <div className="value">{stat.value}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flating-image">
          <div className="img-container">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop"
              alt="Soccer Shoes"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
