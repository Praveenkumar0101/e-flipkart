import React from 'react';
import './Header.css';

const Header = () => {
   

  return (
    <div className="header">
   
      <div className="header-top">
     
        <div className="logo-section">
          <img
            src="https://www.bestcheck.in/wp-content/uploads/2023/06/Untitled-design-2-1.png"
            alt="Flipkart Logo"
            className="logo"
          />
        
        </div>

       
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="search-input"
          />
          <span className="search-icon">&#128269;</span> 
        </div>

       
        <div className="header-icons">
          <div className="icon-item">
            <span className="icon">&#128100;</span> 
            <span>Account</span>
          </div>
          <div className="icon-item">
            <span className="icon">&#128722;</span> 
            <span>Cart</span>
          </div>
          <div className="icon-item">
            <span>Become a Seller</span>
          </div>
          <div className="icon-item">
            <span>&#8942;</span> 
          </div>
        </div>
      </div>

    
      <div className="category-bar">
        {[
          { label: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100' },
          { label: 'Mobiles', img: 'https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100' },
          { label: 'Fashion', img: 'https://th.bing.com/th/id/OIP.ZWwjpQHtHQGWMek1qTjupQHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
          { label: 'Electronics', img: 'https://th.bing.com/th/id/OIP.BGwhDC-5eqhHHqZkDPDMygHaE7?rs=1&pid=ImgDetMain' },
          { label: 'Home & Furniture', img: 'https://th.bing.com/th/id/OIP.TwLq-50ZjEYXwuEwuuQW9QAAAA?rs=1&pid=ImgDetMain' },
          { label: 'Appliances', img: 'https://th.bing.com/th/id/OIP.rTCD96tXPQ5mQJp5WxtLrAHaEK?rs=1&pid=ImgDetMain' },
          { label: 'Flight Bookings', img: 'https://www.lemax.net/wp-content/uploads/2018/04/flight-booking-software-fb.jpg' },
          { label: 'Beauty, Toys & More', img: 'https://rukminim1.flixcart.com/image/832/832/l02r1jk0/role-play-toy/r/p/7/carry-along-makeup-set-beauty-set-and-hair-salon-toy-300-original-imagbxucyv9q9t8c.jpeg?q=70' },
          { label: 'Two Wheelers', img: 'https://th.bing.com/th/id/OIP.wLRyxXpkc90DkDdW3jQLXAAAAA?rs=1&pid=ImgDetMain' }
        ].map((item) => (
          <div key={item.label} className="category-item">
            <img src={item.img} alt={item.label} className="category-icon" />
            <span className="category-label">{item.label}</span>
          </div>
        ))}
      </div>

   
</div>
   
  );
};

export default Header;
