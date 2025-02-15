import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product({ product, onAddToCart }) {
    const [price , setPrice] = useState(parseFloat(product.price));
    const handleplus = () => {
        setPrice(prevPrice=> prevPrice + parseFloat(product.price));
    }
    const handleAddToCart= () => {
       const updatedProduct = {...product, price: price};
       onAddToCart(updatedProduct);
    }
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 m-4 transform transition duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{price}</p>
                <button className="bg-blue-600 rounded-lg hover:bg-blue-700 transition" onClick={handleplus}>+</button>
                <button 
                    className="w-full mt-3 bg-blue-600 text-white py-2  hover:bg-blue-700 transition"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>

                <Link to={`/product/${product.id}`}>
                    <button className="w-full mt-2 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        View Product Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
