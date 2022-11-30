import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://bike-resale-server-three.vercel.app/users/allseller')
      const data = await res.json()
      return data
    }
  })

  const handleDeleteBuyer = (id) => {
    fetch(`https://bike-resale-server-three.vercel.app/users/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          console.log(data);
          refetch()
          Swal.fire({
            icon: 'error',
            title: 'Deleted',
            text: 'User Deleted successfully!',
          })
        }

      })
  }

  const handleVarified = id => {
    fetch(`https://bike-resale-server-three.vercel.app/users/verify/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        refetch()
        Swal.fire(
          'Good job!',
          'You make this seller admin',
          'success'
        )
        console.log(data);
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
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td onClick={() => handleVarified(seller._id)} >{!seller.status && <button className='btn'>verify</button>}</td>
                  <td onClick={() => handleDeleteBuyer(seller._id)} className='btn btn-error my-5 '>X</td>
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