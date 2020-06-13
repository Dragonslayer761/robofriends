import React     from 'react';

const Searchfields=({searchChange})=>{
    return(
        <div className="pa2">
            <input className="pa3 ba b--light-blue bg-lightest-blue"
                  type="search" name="" id="" placeholder='Search Robots' onChange={searchChange} />
        </div>
    );
}

export default Searchfields;