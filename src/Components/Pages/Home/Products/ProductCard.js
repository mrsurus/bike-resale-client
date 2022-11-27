import React from 'react';

const ProductCard = ({data}) => {
    const {name, img,location,Price, used_year, seller, date,original_price} = data;
    return (
        <div className=' '>
            <div className="card w-92 h-[600px] bg-base-100 shadow-xl my-5">
                <figure><img src={img} alt="Shoes" className='h-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{Price}$</div>
                        
                    </h2>
                    <p>Location: {location}</p>
                    <p>Seller: {seller}</p>
                    <p>Used: {used_year} year</p>
                    <p>Original Price: {original_price} $</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{date}</div>
                        <button className='btn '>Bye Now</button>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;