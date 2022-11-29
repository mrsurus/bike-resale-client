import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const {data:sellers=[],refetch} =useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res= await fetch('http://localhost:5000/users/allseller')
            const data = await res.json()
            return data
        }
    })

    const handleDeleteBuyer=(id)=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            refetch()
            toast.success('seller deleted successfully')
        })
    }

    return (
        <div className='mx-24'>
            <h1 className='text-center text-2xl my-5'>There is {sellers.length} seller</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Verify</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
            {
                sellers.map((seller, i) => 
                  <tbody key={seller._id}>
                    <tr>
                      <th>{i+1}</th>
                      <td>{seller.name}</td>
                      <td>{seller.email}</td>
                      <td className='text-blue-700'>verify</td>
                      <td onClick={()=>handleDeleteBuyer(seller._id)} className='btn btn-error'>X</td>
                    </tr>
                  </tbody>
                )
            }
            </table>
              </div>
        </div>
    );
};

export default AllSeller;