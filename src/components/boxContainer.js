import React from 'react';
import Button from './button';
import Box from './box';


export default function BoxContainer(props){
    const {newColor, color, pos: {top, left}} = props;

    const containerStyle = {
        display: 'inline-block',
        position: 'absolute',
        top,
        left,
        transitionDuration: '500ms'
    }
    
    return (
        <div style={containerStyle}>
            <Button changeColor={newColor}/>
            <Box color={color}/>
        </div>
    )
}