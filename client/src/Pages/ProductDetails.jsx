import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, name: 'Apple', price: '100', image: 'apple.jpg', description: 'Apples are round fruits that come in many varieties, and they can be used in many ways. They are also a healthy fruit that contains fiber, vitamin C, and antioxidants' },
    { id: 2, name: 'Banana', price: '5', image: 'Banana.jpg', description: 'Bananas are long, curved fruits with yellow skin that grow in clusters on banana plants. They are a good source of carbohydrates, vitamins, potassium, and other nutrients' },
];

export default function ProductDetail({ cartItems, setCartItems }) {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    const handleAddToCart = () => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="container mx-auto p-6 flex flex-col md:flex-row items-center">
            <img src={product.image} alt={product.name} className="w-1/2 md:w-1/3 h-96 object-cover rounded-lg shadow-md" />
            <div className="md:ml-8 mt-4 md:mt-0">
                <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 text-xl mt-2">{product.price}</p>
                <p className="text-gray-700 mt-4">{product.description}</p>
                
                
            </div>
        </div>
    );
}
