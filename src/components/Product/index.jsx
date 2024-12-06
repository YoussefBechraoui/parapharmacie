import React from 'react';
import './style.css'; 

function Product({ name, brand, image, price, description, addToCart }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-brand">Brand: {brand}</p>
                <p className="product-price">Price: {price.toFixed(2)}DT</p>
                <p className="product-description">{description}</p>
                <br/>
                <button onClick={()=>addToCart({name,brand,image,price,description})}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default Product;