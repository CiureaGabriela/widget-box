import React from 'react'
import Data1 from './Data1'

function List1(props) {
    const {news1}=props;
    return (
        <div className='d-felx justify-content-center'>
            <div>
            {news1.map((info, index)=>{

                return <Data1
                  title={info.title}
                  details={info.details}
                  key={index}
                
                />

                 } )}
                 </div>
        </div>
    )
}

export default List1
