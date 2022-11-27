import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = ({ ctg, }) => {

    return (
        <div  >
            <Link to={`/category/${ctg.brand}`}>
                <div className="card mx-auto w-84 h-60 bg-base-100 shadow shadow-black py-3 ">
                    <figure><img src={ctg.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-center text-3xl font-bold">{ctg.brand}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Category;