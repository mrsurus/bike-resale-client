import React from 'react';

const ExSection = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-violet-400 my-5">
                <div className="hero-content flex-col lg:flex-row-reverse flex-1  ">
                    <div className="text-center lg:text-left lg:ml-48 right-0 ">
                        <h1 className="text-5xl font-bold">Cautions</h1>
                        <p className="py-2">1. Wear a Helmet</p>
                        <p className="py-2">2. Be Seen</p>
                        <p className="py-2">3. Check Your Equipment</p>
                        <p className="py-2">4. Control Your Bicycle</p>
                        <p className="py-2">5. Avoid Riding at Night</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm lg:mr-48 shadow-2xl  bg-base-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgJnayTIV4n_tHJ7w_60krr8LDnPSnkasOw&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExSection;