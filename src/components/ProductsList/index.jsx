import React from 'react';
import './style.css'; 
import Product from '../Product';

function ProductList({ products,addToCart }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <Product
                    
                    key={product.id}
                    name={product.name}
                    brand={product.brand}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default ProductList;