import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]  my-6 " style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7H72bswsu6-4eE5MuXp_wwZk25gJmTOo2A&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Pro Rider</h1>
                        <p className="mb-5">This is an website where you can find used bike and buy bike at lowest price.New look used bike are avilable here. Explore and find out the best one.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;