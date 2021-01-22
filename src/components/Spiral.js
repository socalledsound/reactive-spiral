import React from 'react';
import CircleComponent from './CircleComponent';
import { generatePoints, generateRainbow } from '../utils';

const Spiral = ( {center, numCircles, circleSizeScaler,  a, b} ) => {


    const points = generatePoints(numCircles, center, a, b);
    const colors = generateRainbow(numCircles);

    return ( 
        <g>
            {

                points.map((point, idx) => 
                        <CircleComponent 
                        key={`spiral ${point.id} ${idx}`} 
                        x={point.x} 
                        y={point.y} 
                        size={(idx+1)/circleSizeScaler} 
                        fillColor={colors[idx]}
                        />
                )
            }        
        </g>
     );
}
 
export default Spiral;
