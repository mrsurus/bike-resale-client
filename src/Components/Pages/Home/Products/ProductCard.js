import React from 'react';

const ProductCard = ({data}) => {
    const {name, img,location,Price, usedYear, seller, date} = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">{location}</div>
                    </h2>
                    <p>{seller}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{Price}</div>
                        <div className="badge badge-outline">{date}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;