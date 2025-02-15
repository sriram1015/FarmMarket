import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Narbar";
import Home from './Pages/Home';
import ProductDetail from "./Pages/ProductDetails";
import Cart from './components/Cart';

export default function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
        </Router>
    );
}
