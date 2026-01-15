import { Link } from 'react-router-dom';
import { LuFacebook } from "react-icons/lu";
import { FiInstagram,FiYoutube,FiMapPin ,FiPhone} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { type JSX } from 'react'
import "./footer.css"

const Footer = ():JSX.Element => {
  return (
    <footer >
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="brand-section">
            <Link to="/" >
              <div className="k-icon">
                <span>K</span>
              </div>
              <span className="title">
                KICK<span className="text-primary">ZONE</span>
              </span>
            </Link>
            <p >
              Your ultimate destination for premium soccer gear. Elevate your game with the best equipment from top brands worldwide.
            </p>
            <div className="social-icons">
              {[LuFacebook, FaXTwitter, FiInstagram, FiYoutube].map((Icon, i):JSX.Element => (
                <a
                  key={i}
                  href="#"
                >
                  <Icon  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='links-section'>
            <h4>Quick Links</h4>
            <ul>
              {['Shop All', 'Soccer Shoes', 'Jerseys & Kits', 'Accessories', 'Sale'].map((item: string):JSX.Element => (
                <li key={item}>
                  <Link
                    to="/shop"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className='support-section'>
            <h4>Support</h4>
            <ul>
              {['Contact Us', 'FAQs', 'Shipping Info', 'Returns', 'Size Guide'].map((item: string):JSX.Element => (
                <li key={item}>
                  <a
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='contact-section'>
            <h4>Contact</h4>
            <ul >
              <li >
                <FiMapPin />
                123 Soccer Street, Sports City
              </li>
              <li>
                <FiPhone />
                +1 (555) 123-4567
              </li>
              <li>
                <MdOutlineMail />
                info@kickzone.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 KickZone. All rights reserved.
          </p>
          <div className="policy-links">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item :string):JSX.Element => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
