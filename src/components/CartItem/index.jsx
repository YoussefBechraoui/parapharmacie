import React from 'react';
import './style.css';

function CartItem({ item, isAdmin, onModify, onDelete }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-brand">Brand: {item.brand}</p>
                <p className="cart-item-price">Price: {item.price.toFixed(2)}DT</p>
            </div>
            {/* Admin actions */}
            {isAdmin && (
                <div className="admin-actions">
                    <button 
                        className="modify-btn" 
                        onClick={() => onModify(item.id)}
                    >
                        Modify
                    </button>
                    <button 
                        className="delete-btn" 
                        onClick={() => onDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default CartItem;
