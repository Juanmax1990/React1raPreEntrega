import React from 'react';
import "../CartWidget/CartWidget.css";
import cart from '../CartWidget/carrito.png'
const CartWidget = () => {
  return (
    <div className="cart-widget">
            <img src={cart} alt="carrito" />
            1
        </div>
  );
};

export default CartWidget;