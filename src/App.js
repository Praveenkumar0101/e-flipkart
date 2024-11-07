

import React from 'react';
import Header from './Header';




import './App.css'

const ProductCard = ({ image, title, price }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{price}</p>
  </div>
);

const App = () => {
  const smartphones = [
    {
      id: 1,
      image: 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
      title: 'Realme P1 5G',
      price: 'From ₹13,999',
    },
    {
      id: 2,
      image: 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
      title: 'Vivo T2 Pro 5G',
      price: 'From ₹20,999*',
    },
    {
      id: 3,
      image: 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
      title: 'Poco M6 Pro 5G',
      price: 'From ₹9,249*',
    },
    {
      id: 4,
      image: 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
      title: 'Moto Edge 50 Fusion',
      price: 'From ₹19,999*',
    },
    {
      id: 5,
      image: 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
      title: 'Realme P1 Pro 5G',
      price: 'Just ₹16,999',
    },
    {
      id: 6,
      image: 'https://cdn1.smartprix.com/rx-ibsJ2hNrF-w1200-h1200/bsJ2hNrF.jpg',
      title: 'Realme P1 Pro 5G',
      price: 'Just ₹16,999',
    },
 
  ];

  const items499 = [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.IBsxle2wK9uhtTpAkBF_pwHaFF?rs=1&pid=ImgDetMain',
      title: 'Traditional Attire',
      price: '₹499',
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.IBsxle2wK9uhtTpAkBF_pwHaFF?rs=1&pid=ImgDetMain',
      title: 'Maroon Sneakers',
      price: '₹499',
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.IBsxle2wK9uhtTpAkBF_pwHaFF?rs=1&pid=ImgDetMain',
      title: 'Casual Clothing',
      price: '₹499',
    },
    {
      id: 4,
      image: 'https://th.bing.com/th/id/OIP.IBsxle2wK9uhtTpAkBF_pwHaFF?rs=1&pid=ImgDetMain',
      title: 'Pink Sandals',
      price: '₹499',
    },
    {
      id: 5,
      image: 'https://th.bing.com/th/id/OIP.IBsxle2wK9uhtTpAkBF_pwHaFF?rs=1&pid=ImgDetMain',
      title: 'Children Traditional',
      price: '₹499',
    },
    {
      id: 6,
      image: 'https://th.bing.com/th/id/OIP.IBsxle2wK9uhtTpAkBF_pwHaFF?rs=1&pid=ImgDetMain',
      title: 'Children Traditional',
      price: '₹499',
    },
  ];

  return (
    <div>

      <Header/>
      <h2>Best Deals on Smartphones</h2>
      <div className="product-list">
        {smartphones.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <h2>₹499 Only</h2>
      <div className="product-list">
        {items499.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 Vancharla Praveen kumar. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  </footer>
    </div>
  );
};

export default App;
