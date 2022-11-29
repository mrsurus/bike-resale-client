import React from 'react';

const ExSection = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgJnayTIV4n_tHJ7w_60krr8LDnPSnkasOw&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExSection;