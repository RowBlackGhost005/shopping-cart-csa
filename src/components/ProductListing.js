import React , { useState , useEffect } from 'react';

import ProductCard from './ProductCard';
import './ProductListing.css'

function ProductListing() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(setProducts)
    }, [])




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