import React from 'react';
import Product from '../components/Product';

const products = [
    { id: 1, name: 'Apple', price: '100', image: 'apple.jpg' },
    { id: 2, name: 'Banana', price: '5 ', image: 'Banana.jpg' },
];

export default function Home({ cartItems, setCartItems }) {
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Farm Market</h1>
            <div className="flex flex-wrap justify-center">
                {products.map(product => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}
