import React from 'react';
import { useState } from 'react';
import './App.css';
const imageList = [
  'image1.jpg',
  // 'image2.jpg',
  // 'image3.jpg',
  // 'image4.jpg',
];
const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Great service! The cars are always clean and in excellent condition.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Good prices and friendly staff. Will definitely rent again.',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    rating: 5,
    comment: 'Smooth booking process and reliable vehicles. Highly recommended.',
  },
];

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(Math.max(scrollPosition - 1, 0));
  };

  const scrollRight = () => {
    setScrollPosition(Math.min(scrollPosition + 1, imageList.length - 1));
  };
  return (
    <div className="App">
       <div className="App">
       {/* <header className="App-header">
        <h1>Car Rental</h1>
        <p>Explore Our Fleet of Vehicles</p>
      </header> */}

      <main>
        <div className="image-container">
          <button className="scroll-button" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="image-scroll">
            <div
              className="image-scroll-content"
              style={{ transform: `translateX(-${scrollPosition * 100}%)` }}
            >
              {imageList.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="scroll-image"
                />
              ))}
            </div>
          </div>
          <button className="scroll-button" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </main>
    </div>

      <main>
      <section className="car-list">
          <CarCard
            image="car1.jpg"
            name="HatchBack"
            price="1000/day"
            description="Practicality and versatility, hatchbacks offer a balance of efficiency, maneuverability, and ample cargo space."
          />
          <CarCard
            image="car2.jpg"
            name="SUV"
            price="1200/day"
            description="An SUV that can handle any terrain and family trips."
          />
          <CarCard
            image="car3.jpg"
            name="Luxury Sedan"
            price="1200/day"
            description="A comfortable and stylish sedan for your travels."
          />
        </section>
        <section className="car-list">
          <CarCard
            image="car4.jpg"
            name="MUV"
            price="1500/day"
            description="Harmonious blend of comfort, functionality, and performance, MUVs are equipped to accommodate multiple passengers with ease."
          />
          <CarCard
            image="car5.jpg"
            name="Pickup Trucks"
            price="1500/day"
            description="Pickup trucks extends to their comfortable and feature-rich interiors, offering amenities akin to those found in traditional passenger vehicles."
          />
          <CarCard
            image="car6.jpg"
            name="Convertibles"
            price="1500/day"
            description="Feel the wind in your hair with our convertible cars."
          />
        </section>
      </main>
      <div className="App">
      <header className="review-header">
        <h1>Best From Our Guests</h1>
      </header>

      <main>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h2>{review.name}</h2>
              <div className="rating">Rating: {review.rating}/5</div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </div>

      <footer className="App-footer">
        <p>Contact us at info@carpooling.com</p>
      </footer>
    </div>
  );
}

function CarCard({ image, name, price, description }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button>Book Now</button>
    </div>
  );
}

export default App;

