import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const {data:buyers=[]} =useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res= await fetch('http://localhost:5000/users/allbuyer')
            const data = await res.json()
            return data
        }
    })

    const handleDeleteBuyer=()=>{
        console.log('delete korban');
    }

    return (
        <div className='mx-24'>
        <h1 className='text-center text-2xl my-5'>There is {buyers.length} seller</h1>
        <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
        {
            buyers.map((buyer, i) => 
              <tbody key={buyer._id}>
                <tr>
                  <th>{i+1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td onClick={handleDeleteBuyer} className='btn btn-error'>X</td>
                </tr>
              </tbody>
            )
        }
        </table>
          </div>
    </div>
    );
};

export default AllBuyer;