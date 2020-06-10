import React     from 'react';

const Searchfields=({searchFields,searchChange})=>{
    return(
        <div className="pa2">
            <input type="search" name="" id="" placeholder='Search Robots' onChange={searchChange} />
        </div>
    );
}

export default Searchfields;