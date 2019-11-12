import React from 'react';

/*
function Sroll () {
    return (
        <>
    )
    
}
*/
const Scroll = (props) => {
    return (
        // render 包在裡面的component
        <div style = {{ overflow: 'scroll' , border: '2px solid black', height: '500px' }}>
            { props.children } 
        </div>
    ) ;
}

export default Scroll;