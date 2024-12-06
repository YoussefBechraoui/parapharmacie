import React, { useState } from "react";
import "./style.css";

const Home = ({ setCurrentView }) => {
  const sliderImages = [
    "https://pharma-shop.tn/15248-large_default/nuk-sucette-signature-avec-boite-0-6-mois.jpg",
    "https://pharma-shop.tn/16614-large_default/my-comfort-premium-lingettes-bebe-80-pieces.jpg",
    "https://www.cavernesante.com/3968-large_default/kingflex-compresse-20x20.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % sliderImages.length
    );
  };

  const handleLoginClick = () => {
    setCurrentView("AdminLogin");  // Change the view to AdminLogin when the login icon is clicked
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="login-icon-container">
          <a
            href="#"
            className="login-icon"
            onClick={handleLoginClick} // Trigger login click
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
              alt="Login Icon"
              title="Login"
            />
          </a>
        </div>
        <div className="header-content">
          <h1>Bienvenue chez Parapharmacie</h1>
          <p>Découvrez nos produits pour votre santé et votre bien-être</p>
          <button
            className="explore-button"
            onClick={() => setCurrentView("ClientLogin")}
          >
            Explorer les Produits
          </button>
        </div>
      </header>

      {/* Slider Section */}
      <section className="slider">
        <button className="slider-button left" onClick={goToPrevious}>
          &#9664;
        </button>
        <div
          className="slider-images-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          ))}
        </div>
        <button className="slider-button right" onClick={goToNext}>
          &#9654;
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Parapharmacie | Tous droits réservés.</p>
        <p>
          Suivez-nous sur : <a href="#">Facebook</a> | <a href="#">Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
