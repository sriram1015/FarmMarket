import React from 'react';

export default function Cart({ cartItems }) {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center border-b py-3">
                                <span className="text-gray-800">{item.name}</span>
                                <span className="text-gray-600">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
