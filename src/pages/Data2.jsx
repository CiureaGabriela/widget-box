import React from 'react'


function Data2(props) {
    const{title, details}=props;
    return (
       
           <div>
            <p className='title'>{title}</p>
            <p>{details}</p>
            
        </div>
        
        
        
    )
}

export default Data2;
