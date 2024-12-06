import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import AdminAuth from "./components/AdminAuth"; 

import ClientAuth from './components/ClientAuth';
import Home from './components/Home';

function App() {
  const [products, setProducts] = useState([{
    id:1,
    name: "THERMOMETRE MEDICAL NUMERIQUE TH1",
    brand: "DOMOTHERM ",
    price: 12,
    image: "https://www.picclickimg.com/TtIAAOSwrcBiwNRC/Thermometre-numerique-a-fievre-10-secondes-UEBE-Domotherm.webp",
    description :" Domotherm est un thermomètre numérique médical avec un signal sonore utilisé pour mesurer la température corporelle"
  },
  {
    id:2,
    name: "LIERAC HOMME COFFRET ROUTINE DE SOIN - GEL DOUCHE",
    brand: "LIERAC HOMME",
    price: 139,
    image: "https://pharma-shop.tn/19813-large_default/lierac-homme-coffret-routine-de-soin-gel-douche.jpg",
    description :" LIERAC HOMME GEL DOUCHE INTEGRAL 200ML : Pure sensation de vitalité, ce gel douche ultra-frais 4 en 1 nettoie sans agresser la peau et les cheveux et leur apporte douceur, tonus et fraîcheur: les cheveux sont propres et brillants et la peau est nette, douce, hydratée, rafraîchie et stimulée."
  },
  {
    id:3,
    name: "COMPRESSE KINGFLEX",
    brand: "KINGFLEX",
    price: 15,
    image: "https://www.cavernesante.com/3968-large_default/kingflex-compresse-20x20.jpg",
    description :"Les compresses stériles sont des compresses en toile de gaze en coton blanchi hydrophile 17 fils/cm2. Les compresses en sachet individuel sont stérilisées à la vapeur. Les compresses stériles sont contrôlées dans nos laboratoires selon les normes de la pharmacopée européenne.Large utilisation en milieu hospitalier et en pharmacie. Existe en différentes dimensions et différents pliages."
  },
  {
    id:4,
    name: "CANPOL BABIES CERCEAU POUR RINCAGE DES CHEVEUX",
    brand: "CANPOL",
    price: 2,
    image: "https://pharma-shop.tn/19850-large_default/canpol-babies-cerceau-pour-rincage-des-cheveux.jpg",
    description :"Avec le chapeau de bain pour bébés Canpol, chaque bain est réussi. Le cerceau de lavage de cheveux facilite le lavage des cheveux de bébé sans risque que du shampooing et de l’eau ne pénètre dans ses yeux. Il vous aide à nettoyer la tête et les cheveux d’un bébé qui se tortille, qui n’a généralement pas envie de cela. Il est également facile à nettoyer."
  },
  {
    id:5,
    name: "MY COMFORT PREMIUM LINGETTES BEBE VITAMINE E + B5, 80 PIECES",
    brand: "MY COMFORT",
    price: 5,
    image: "https://pharma-shop.tn/16614-large_default/my-comfort-premium-lingettes-bebe-80-pieces.jpg",
    description :" Spécialement conçues pour la peau sensible des bébés, les lingettes MyComfort sont idéales pour la toilette quotidienne du votre nouveau-né.Le paquet de lingettes bébé MyComfort se compose de 80 Pièces qui contient du Vitamine E et du provitamine B5 pour améliorer l'hydratation de la peau et la rendre plus douce."
  },
  {
    id:6,
    name: "SUCETTE SIGNATURE AVEC BOITE 0-6 MOIS",
    brand: "NUK",
    price: 10,
    image: "https://pharma-shop.tn/15248-large_default/nuk-sucette-signature-avec-boite-0-6-mois.jpg",
    description :" La téterelle NUK Classic la plus adaptée pour la mâchoire – pour un développement global et sain du bébé.Le col de téterelle fin et étroit réduit la pression sur la mâchoire et les dents.Téterelle plate et dessous lisse – pour beaucoup de place pour le mouvement naturel de succion.Boîte à sucette stable et réutilisable, sans BPA.Plaque buccale en forme de cœur aux formes encore plus flexibles et douces – avec anneau à la mode."
  }])
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const [currentView, setCurrentView] = useState("Home");

  return (
    <>
      {/* Render Navbar if currentView is not "Home" or "ClientLogin" */}
      {(currentView !== "Home" && currentView !== "ClientLogin") && (
        <Navbar count={cartProducts.length} setCurrentView={setCurrentView} />
      )}

      <div>
      <div>
          {/* Check for different views and render accordingly */}
          {currentView === "Home" && <Home setCurrentView={setCurrentView} />}
          {currentView === "ClientLogin" && (
            <ClientAuth setCurrentView={setCurrentView} />
          )}
          {currentView === "AdminLogin" && (
            <AdminAuth setCurrentView={setCurrentView} />
          )}
          {currentView === "Default" && (
            <ProductList products={products} addToCart={addToCart} />
          )}
          {currentView === "Cart" && <Cart cartItems={cartProducts} />}
        </div>
      </div>
    </>
  );
};
export default App;