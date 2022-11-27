import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const data = useLoaderData()
    
    return (
        <div>
            {data.map(data => <ProductCard data={data}></ProductCard>)}
        </div>
    );
};

export default Products;