import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const OrderModal = ({modalInfo}) => {
    const {name,seller, price} = modalInfo
    const {user} = useContext(AuthContext)

    const handleOrderModal =(event)=>{
        event.preventDefault();
        const form = event.target;
        const byer_name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const orders = {
            buyerName:byer_name,
            email:email,
            phone:phone,
            meettingLocation:location,
            productName:name,
            seller:seller
        }
        console.log(orders);
    }
    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleOrderModal}  className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" defaultValue={`${price} $` } disabled className="input w-full input-bordered " />
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;