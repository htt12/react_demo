import React from 'react';

export default (props) =>{

    function handleClick(){
        console.log('clickHandler is good2go');
        props.changeColor();
    }

    return (
        <div>
            <button className='btn btn-outline-warning btn-lg' onClick={handleClick}>Press</button>
        </div>
    );
}