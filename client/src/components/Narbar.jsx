import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-green-500 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white">🌱 Farm Market</Link>
                <div className="space-x-6">
                    <Link to="/" className="text-white hover:text-gray-900 transition">Home</Link>
                    <Link to="/cart" className="text-white hover:text-gray-900 transition">Cart</Link>
                </div>
            </div>
        </nav>
    );
}
