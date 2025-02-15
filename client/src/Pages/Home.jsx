import React from 'react';
import Product from '../components/Product';

const products = [
    { id: 1, name: 'Apple', price: '100', image: 'apple.jpg' },
    { id: 2, name: 'Banana', price: '5 ', image: 'Banana.jpg' },
    {id:3,name:'Mango',price:'150',image:'mango.jpg'},
    {id:4,name:'Pineapple',price:'200',image:'pineapple.jpg'},
    {id:5,name:'Strawberry',price:'250',image:'strawberry.jpg'},
    {id:6,name:'Watermelon',price:'300',image:'watermelon.jpg'},
    {id:7,name:'Grapes',price:'350',image:'grapes.jpg'},
    {id:8,name:'Orange',price:'400',image:'orange.jpg'},
];

export default function Home({ cartItems, setCartItems }) {
    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-left mb-6 text-orange-500">Fruits</h1>
            <div className="flex flex-wrap justify-center">
                {products.map(product => (
                    <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}
