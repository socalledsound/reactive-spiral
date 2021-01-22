import React, { Component } from 'react';
import Slider from './components/Slider';
import Spiral from './components/Spiral';
import './App.css';


const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight - 200;
const center = { x: canvasWidth/2, y: canvasHeight/2 };


class App extends Component {
    
    state = { 
        numCircles : 720,
        circleSizeScaler: 20,
        a: 1.1,
        b: 1.1,
     }

    render() { 
        const { numCircles, circleSizeScaler, a, b } = this.state;

        return ( 

            <div className='container'>
                <svg
                    viewBox={`0 0 ${canvasWidth} ${canvasWidth}`}
                    width={canvasWidth}
                    height={canvasHeight}
                    >
                    <Spiral  center={center} numCircles={numCircles} circleSizeScaler={circleSizeScaler} a={a} b={b}/>
                </svg>
                
                
                <Slider numCircles={numCircles}/>
            </div>



         );
    }
}
 
export default App;