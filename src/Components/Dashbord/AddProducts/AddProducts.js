import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const {user} = useContext(AuthContext)

    const handleAddProducts = (e) => {
        e.preventDefault()
        const form = e.target
        const productName = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const location = form.location.value;
        const number = form.number.value;
        const orginalPrice = form.originalPrice.value;
        const condition = form.condition.value
        const usedYear = form.usedYear.value;
        const img = form.img.value
        const todayDate = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        const date = `${todayDate}/${month}/${year}`

        const products = {
            name: productName,
            brand:brand,
            img:img,
            location:location,
            seller:user?.displayName,
            email: user?.email,
            number: number,
            condition:condition,
            price:price,
            original_price:orginalPrice,
            used_year: usedYear,
            date:date
        }
        console.log(products);
    }

    return (
        <div>
            <div className='w-2/3 mx-auto'>
                <p className='text-center text-3xl'>Add A Product</p>
                <form onSubmit={handleAddProducts}>
                    <p className='text-xl'>Product Name:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Name' name="name" id="" required />
                    <p className='text-xl'>Select a Brand</p>
                    <select name="brand" className="select select-bordered w-full">
                        <option>YAMAHA</option>
                        <option>TVS</option>
                        <option>HONDA</option>
                    </select>
                    <p className='text-xl'>Price:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Price' name="price" id="" required />
                    <p className='text-xl'>Location:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Location' name="location" id="" required />
                    <p className='text-xl'>Number:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Number' name="number" id="" required />
                    <p className='text-xl'>Original Price:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Original Price' name="originalPrice" id="" required />
                    <p className='text-xl'>Select Condition</p>
                    <select name="condition" className="select select-bordered w-full">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    <p className='text-xl'>Used of Year:</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Used of year' name="usedYear" id="" required />
                    <p className='text-xl'>Image URL</p>
                    <input type="text" className='input input-bordered w-full mb-3 ' placeholder='Image URL' name="img" id="" required />
                    <input type="submit" name="" className='btn btn-primary my-10' value='Add To Services' id="" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;