// import { Trophy, Truck, Shield, Headphones } from 'lucide-react';
import { BiTrophy } from "react-icons/bi";
import { FiTruck, FiShield } from "react-icons/fi";
import { PiHeadphonesBold } from "react-icons/pi";
import type { JSX }from 'react';
import './about.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./about.css"

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: BiTrophy,
    title: 'Premium Quality',
    description: 'Only the finest materials and craftsmanship in every product we offer.',
  },
  {
    icon: FiTruck,
    title: 'Free Shipping',
    description: 'Free express delivery on all orders over $100 worldwide.',
  },
  {
    icon: FiShield,
    title: 'Secure Payment',
    description: 'Your transactions are protected with bank-level encryption.',
  },
  {
    icon: PiHeadphonesBold,
    title: '24/7 Support',
    description: 'Our expert team is always ready to help you succeed.',
  },
];

const AboutSection = (): JSX.Element => {
  return (
    <div className="about-page">
      <Header />

        <main>
        {/* Background Accent */}
          <div className="backgroun-accent" />
          <section className="hero-section">
            <div className="hero-content">
              <h1>
                ABOUT <span>US</span>
              </h1>
              <p>
                Discover our complete collection of premium soccer gear. From elite footwear to professional kits and accessories.
              </p>
            </div>
          </section>
        
          <div className="container">
            <div className="container-grid">
              {/* Content */}
              <div className="content">
                <div>
                  <span className="title">About Us</span>
                  <h2>
                    GEAR UP FOR
                    <span> GREATNESS</span>
                  </h2>
                </div>
                
                <p className="p-text-1">
                  At KickZone, we believe that every player deserves access to professional-grade equipment. 
                  Founded by former athletes, we understand the demands of the beautiful game and curate 
                  only the best gear to help you perform at your peak.
                </p>

                <p className="p-text-2">
                  From grassroots beginners to seasoned professionals, our mission is to equip players 
                  with innovative products that enhance performance, prevent injury, and inspire confidence 
                  on the pitch.
                </p>

                {/* Stats */}
                <div className="stats-grid">
                  {[
                    { value: '10+', label: 'Years Experience' },
                    { value: '150K+', label: 'Orders Shipped' },
                    { value: '98%', label: 'Happy Customers' },
                  ].map((stat:{value:string ,label:string,}): JSX.Element => (
                    <div key={stat.label} className="stat-item">
                      <div className="value">{stat.value}</div>
                      <div className="label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="features-grid">
                {features.map((feature: Feature, index:number): JSX.Element => (
                  <div
                    key={feature.title}
                    className="feature-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="feature-icon">
                      <feature.icon />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="desc">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

      <Footer />
    </div>
  );
};

export default AboutSection;
