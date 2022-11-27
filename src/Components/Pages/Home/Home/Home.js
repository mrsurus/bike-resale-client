import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';



const Home = () => {

    const {data: category} = useQuery({
        queryKey:['category'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/category`)
            const data = await res.json()
            return data
        }
    })

    

    return (
        <div className='mx-20'>
            this is Home
           <div className='  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                category?.map(ctg => <Category
                     key={ctg._id}
                      ctg={ctg}>

                     </Category>)
            }
           </div>

        </div>
);
    }
export default Home;