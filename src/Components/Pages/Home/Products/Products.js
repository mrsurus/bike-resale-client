import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderModal from './OrderModal';
import ProductCard from './ProductCard';

const Products = () => {
    const [modalInfo, setModalInfo] = useState(null)
    const data = useLoaderData()
    console.log(modalInfo);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-5'>
            {data?.map(data => <ProductCard
            setModalInfo={setModalInfo}
             data={data }
             key={data._id}></ProductCard>)}

             
                {modalInfo && <OrderModal
                modalInfo={modalInfo}>
                    </OrderModal>}
             

        </div>
    );
};

export default Products;