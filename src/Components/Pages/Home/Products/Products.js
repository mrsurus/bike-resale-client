import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const data = useLoaderData()
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-5'>
            {data.map(data => <ProductCard data={data}></ProductCard>)}
        </div>
    );
};

export default Products;