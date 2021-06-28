import React from 'react'


function Data1(props) {
    const{title, details}=props;
    return (
       
         <div>
            <p className='title'>{title}</p>
            <p>{details}</p>
            
        </div>
        
   
       
    )
}

export default Data1;
