import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/image1';
import image2 from './images/image2';
import image3 from './images/image3';
import image4 from './images/image4';


const HomePage = () => {
  return (
    <div>
      <header>
        <h1>My Simple React Home Page</h1>
      </header>
      <main>
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </main>
      <div>
        <p><img src="{image1}"/></p>
        <p><img src="{image2}"/></p>
        <p><img src="{image3}"/></p>
        <p><img src="{image4}"/></p>
      </div>
    </div>
  );
}

export default HomePage;