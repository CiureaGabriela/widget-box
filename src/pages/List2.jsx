import React from 'react'
import Data2 from './Data2'

function List2(props) {
    const {news2}=props;
    return (
        <div>
            {news2.map((info,index)=>{

                return <Data2
                  title={info.title}
                  details={info.details}
                  key={index}
                
                />

                 } )}
        </div>
    )
}

export default List2