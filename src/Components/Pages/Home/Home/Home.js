import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ExSection from '../ExSection/ExSection';



const Home = () => {

    const {data: category} = useQuery({
        queryKey:['category'],
        queryFn: async()=>{
            const res = await fetch(`https://bike-resale-server-three.vercel.app/category`)
            const data = await res.json()
            return data
        }
    })

    

    return (
        <div className='mx-20'>
            <Banner></Banner> 
            <h1 className='font-bold text-3xl my-5'>Catagories of Bike :</h1>
           <div className='  mx-auto my-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          
           {
                category?.map(ctg => <Category
                     key={ctg._id}
                      ctg={ctg}>

                     </Category>)
            }
           </div>
           <ExSection></ExSection>

        </div>
);
    }
export default Home;