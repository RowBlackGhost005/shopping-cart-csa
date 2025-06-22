import React , { useState , useEffect } from 'react';

import ProductCard from './ProductCard';
import './ProductListing.css'

function ProductListing() {

    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(false);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => {
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)
            return res.json()
        })
        .then((data) => {
            setProducts(data)
            setLoading(false)
        })
        .catch((err) => {
            console.error('Fetch error:', err)
            setError('Failed to load products. Please try again.')
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p className="status-message">Loading products...</p>
    }

    if (error) {
        return <p className="status-message error">{error}</p>
    }

    if(products.length === 0) {
        return <p className="status-message">No products available</p>
    }


    return(
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                key={product.id}
                product={product}/>
            ))}
        </div>


    );
};

export default ProductListing;