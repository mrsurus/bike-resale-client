import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const { data: myproducts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://bike-resale-server-three.vercel.app/products?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='mx-3 '>
             <h3 className="text-center text-3xl my-5 ">You Have {myproducts.length} Products</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
               
                {
                    myproducts.map(myproduct =>
                        <div key={myproduct._id} className="card card-side bg-base-100 shadow-2xl my-5">
                            <div className='w-1/2'>
                                <figure><img src={myproduct.img} alt="Movie" /></figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{myproduct.name}</h2>
                                <p>Brand: {myproduct.brand}</p>
                                <p>Price: {myproduct.price}$</p>
                                <p>Original Price: {myproduct.original_price}$</p>
                                <p>Used: {myproduct.used_year} year</p>
                                <button className='btn btn-success '>Avilable</button>
                                <button className='btn  '>Ad</button>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default MyProducts;