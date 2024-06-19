/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Movies({name,remval}){
    

    return (
    <div className="body">
    <ul>
        { name.map((n,index)=>(
        <li key = {index}>
                  <span className='name'>{n}</span>
                  <button type="button" className="btn btn-danger delete" onClick={()=>{
                    remval(n);
                  }}>Delete</button>
              </li>
              ))}        
    </ul>
    </div>);
}

export default Movies;
