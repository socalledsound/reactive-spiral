import React from 'react';
import './Slider.css';

const Slider = ({name, minVal, maxVal, value, updateParent}) => {
    return ( 
        <div className="slider-container">
            <label htmlFor={name} className="label">
                {name} <span style={{color: 'white'}}>   ({value})</span>
            </label>
            <input
                className="slider-input"
                name={name}
                type="range"
                min={minVal}
                max={maxVal}
                step="1"
                value={value}
                onChange={(e) => updateParent(name, e.target.value)}
            />
            
        </div>
     );
}
 
export default Slider;
