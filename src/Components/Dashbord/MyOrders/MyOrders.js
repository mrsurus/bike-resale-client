import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyOrderCard from './MyOrderCard';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleDeleteOrder =()=>{
        
    }

    return (
        <div className='mx-10'>
            <h3 className='text-center text-2xl my-5'>My Orders</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th> Product Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        orders?.map(order => <tbody>
                            <tr>
                                <th>
                                    <button onClick={handleDeleteOrder} className='btn btn-error text-white'>X</button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.productName}</div>
                                            <div className="text-sm opacity-50">{order.meettingLocation}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                
                                    <span className="badge badge-ghost badge-sm">{order.seller}</span>
                                </td>
                                <td>{order.price}$</td>
                                <th>
                                    <button className="btn ">Pay</button>
                                </th>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>

        </div>
    );
};

export default MyOrders;