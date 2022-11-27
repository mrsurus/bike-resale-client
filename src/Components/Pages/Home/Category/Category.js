import React, { useEffect } from 'react';

const Category = () => {

    useEffect(()=>{
        fetch('Category.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>This is Category Section</h1>

        </div>
    );
};

export default Category;