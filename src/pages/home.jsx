// src/pages/Home.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import './Home.css';

const items = {
  Vegetables: [
    { name: 'Carrot', price: 20 },
    { name: 'Spinach', price: 15 },
    { name: 'Broccoli', price: 25 },
    { name: 'Tomato', price: 18 },
    { name: 'Potato', price: 22 },
    { name: 'Cucumber', price: 16 },
    { name: 'Cauliflower', price: 24 },
    { name: 'Onion', price: 19 },
    { name: 'Bell Pepper', price: 30 },
    { name: 'Lettuce', price: 20 },
    { name: 'Eggplant', price: 23 },
    { name: 'Peas', price: 28 },
    { name: 'Zucchini', price: 27 }
  ],
  Fruits: [
    { name: 'Apple', price: 30 },
    { name: 'Banana', price: 12 },
    { name: 'Mango', price: 35 },
    { name: 'Orange', price: 25 },
    { name: 'Grapes', price: 22 },
    { name: 'Strawberry', price: 40 },
    { name: 'Pineapple', price: 28 },
    { name: 'Papaya', price: 20 },
    { name: 'Watermelon', price: 32 },
    { name: 'Cherry', price: 45 },
    { name: 'Guava', price: 18 },
    { name: 'Kiwi', price: 38 },
    { name: 'Blueberry', price: 50 }
  ],
  Flowers: [
    { name: 'Rose', price: 10 },
    { name: 'Tulip', price: 12 },
    { name: 'Lily', price: 15 },
    { name: 'Orchid', price: 20 },
    { name: 'Sunflower', price: 8 },
    { name: 'Daisy', price: 9 },
    { name: 'Marigold', price: 7 },
    { name: 'Lavender', price: 18 },
    { name: 'Jasmine', price: 11 },
    { name: 'Hibiscus', price: 10 },
    { name: 'Peony', price: 25 },
    { name: 'Carnation', price: 13 },
    { name: 'Lotus', price: 14 }
  ]
};
function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Vegetables');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items[selectedCategory].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="product-list">
        {filteredItems.map((item) => (
          <ProductCard
            key={item.name}
            name={item.name}
            price={item.price}
            category={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
