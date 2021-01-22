import React from 'react';

const CircleComponent = ({x,y, size, fillColor}) => {
    return ( 
         <circle cx={x} cy={y} r={size} fill={fillColor} opacity="0.4"/> 
     );
}
 
export default CircleComponent
