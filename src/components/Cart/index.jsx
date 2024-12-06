import React, { useState, useCallback } from 'react';
import './style.css';
import CartItem from '../CartItem';

function Cart({ cartItems }) {
    const [view, setView] = useState("default");
    const [paymentMessage, setPaymentMessage] = useState("");
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handlePay = useCallback((e) => {
        e.preventDefault();
        setTimeout(() => {
            setPaymentMessage("Payment successful! Thank you for your purchase.");
        }, 2000);
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setPaymentDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }, []);

    return (
        <div className="cart">
            {view === "default" && (
                <>
                    <h2>Cart</h2>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total Price: {totalPrice} DT</h3>
                        <button onClick={() => setView("payment")}>
                            Pay
                        </button>
                    </div>
                </>
            )}

            {view === "payment" && (
                <>
                    <h2>Payment</h2>
                    <form onSubmit={handlePay} className="payment-form">
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input type="text" id="cardNumber" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleInputChange} required />

                        <label htmlFor="expirationDate">Expiration Date:</label>
                        <input type="text" id="expirationDate" name="expirationDate" value={paymentDetails.expirationDate} onChange={handleInputChange} required />

                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" value={paymentDetails.cvv} onChange={handleInputChange} required />

                        <button type="submit">Confirm Payment</button>
                    </form>
                </>
            )}

            {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
        </div>
    );
}

export default React.memo(Cart);
