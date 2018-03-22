import React from 'react';

export default (props) =>{
    
    const boxStyle = {
        display: 'inline-block',
        height: '150px',
        width: '150px',
        backgroundColor: props.color,
        margin: '15px',
        transitionDuration: '500ms',
    };

    return <div style={boxStyle}/>
}