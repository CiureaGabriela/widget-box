import React from 'react'
import Header from './Header';

function layout(props) {
    return (
        <div>
            <Header/>
            { props.children }
        </div>
    )
}

export default layout
