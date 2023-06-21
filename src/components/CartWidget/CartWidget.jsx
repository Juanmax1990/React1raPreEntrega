import React, { useState } from 'react';
import "../CartWidget/CartWidget.css";
import cart from '../CartWidget/carrito.png';

const CartWidget = () => {
  const [cartItemCount, setCartItemCount] = useState(1); // Estado para el contador del carrito

  return (
    <div className="cart-widget">
      <a href="/carrito" className="cart-link">
        <img src={cart} alt="carrito" />
        <span className="cart-item-count">{cartItemCount}</span> {/* Renderizar el contador del carrito */}
      </a>
    </div>
  );
};

export default CartWidget;