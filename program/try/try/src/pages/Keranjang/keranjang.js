import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Keranjang = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Bata Tempel Mozaik', price: 14000, quantity: 1, image: '/BataTempelMozaik.png' },
    // ... tambahkan item lain jika diperlukan
  ]);

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const formatCurrency = (value) => {
    return "Rp " + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ backgroundColor: '#cccccc', color: '#000000', textAlign: 'center', padding: '5px' }}>
        <h1>Keranjang</h1>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center' }}>
        <section style={{ marginBottom: '10px', marginLeft: '1px', marginRight: '1px' }} className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                marginBottom: '10px',
                padding: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                width: '20cm',
                fontFamily: 'Times New Roman, Times, serif',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '150px', height: '150px', marginRight: '20px' }}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ fontFamily: 'Times New Roman, Times, serif', fontWeight: '30px' }}>{item.name}</h2>
                <p style={{ margin: '0', marginBottom: '20px' }}><b>Harga: Rp.{item.price.toFixed(2)}</b></p>
                <div style={{ display: 'flex', alignItems: 'center' }} className="quantity">
                  <button
                    style={{
                      backgroundColor: '#157437',
                      color: '#fff',
                      border: 'none',
                      padding: '5px',
                      cursor: 'pointer',
                      margin: '5px',
                      width: '30px',
                      height: '30px',
                    }}
                    className="quantity-btn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span style={{ margin: '5px' }} className="quantity-value">{item.quantity}</span>
                  <button
                    style={{
                      backgroundColor: '#157437',
                      color: '#fff',
                      border: 'none',
                      padding: '5px',
                      cursor: 'pointer',
                      margin: '5px',
                      width: '30px',
                      height: '30px',
                    }}
                    className="quantity-btn"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section
          style={{
            outline: 'none',
            backgroundColor: '#f5f5f5',
            padding: '10px',
            border: '1px solid #ddd',
            marginLeft: '10px',
          }}
          className="cart-summary"
        >
          <h2 style={{ marginBottom: '10px' }}>Ringkasan Belanja</h2>
          <p style={{ marginLeft: '1px', marginBottom: '1px', fontFamily: 'Times New Roman, Times, serif' }}>
            Total Item: <span id="totalItems">{getTotalQuantity()}</span>
          </p>
          <p style={{ marginLeft: '1px', marginBottom: '1px', fontFamily: 'Times New Roman, Times, serif' }}>
            Total Harga: Rp<span id="totalPrice">{formatCurrency(getTotalPrice())}</span>
          </p>
          <Link to="../Cek/cek">
            <button
              style={{ outline: 'none', backgroundColor: 'transparent' }}
            >
              <img
                src="/whatsapp.png"
                alt="whatsapp-icon"
                style={{ width: '40px' }}
              />
              Beli via Whatsapp
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Keranjang;
