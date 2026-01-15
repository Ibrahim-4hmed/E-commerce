import { useState } from 'react';
import { MdMailOutline } from "react-icons/md";
import { FiSend,FiMapPin,FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";
import type { JSX } from 'react';
import "./homeSections.css";

type FormData = {
  name: string 
  email: string
  message: string
}

const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch('https://api-endpoint.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    toast.success(
      <div className="toast-wrapper">
        <h4 className="toast-title">Success!</h4>
        <p className="toast-message">Your message has been sent successfully.</p>
      </div>,
      { duration: 3500 }
    );

    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    // console.log(error);
    toast.error('Something went wrong. Please try again.');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="wrapper">
          {/* Info */}
          <div className="info ">
            <div>
              <span className="get-touch">Get In Touch</span>
              <h2>
                LET'S CONNECT
              </h2>
            </div>
            
            <p >
              Have questions about our products or need help with your order? 
              Our team is here to assist you. Reach out and we'll respond promptly.
            </p>

            <div className="contact-details">
              {[
                { icon: MdMailOutline, label: 'Email', value: 'info@kickzone.com' },
                { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: FiMapPin, label: 'Address', value: '123 Soccer Street, Sports City, SC 12345' },
              ].map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="icon">
                    <item.icon  />
                  </div>
                  <div>
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="first-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-card"
              />
            </div>
            
            <div>
              <label htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="bg-card"
              />
            </div>
            
            <div>
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
                className="bg-card resize-none"
              />
            </div>

            <button type="submit" className='send-button'>
              Send Message
              <FiSend className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
