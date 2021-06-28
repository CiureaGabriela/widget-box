import React from 'react'
import Data3 from './Data3'

function List3(props) {
    const {news3}=props;
    return (
        <div>
            {news3.map((info,index)=>{

                return <Data3
                  title={info.title}
                  details={info.details}
                  key={index}
                
                />

                 } )}
        </div>
    )
}

export default List3