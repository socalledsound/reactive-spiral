
const range = (count) => {
    return Array.from(Array(count).keys());
  }


const sinToHex = (i, phase, numCircles) =>  {
    const sin = Math.sin(Math.PI / numCircles * 2 * i + phase);
    const int = Math.floor(sin * 127) + 128;
    const hex = int.toString(16);
  
    return hex.length === 1 ? "0"+hex : hex;
  }


export const generateRainbow = (numCircles) => {

    const colors = range(numCircles).map(  i => {
        const r = sinToHex(i, 0 * Math.PI * 2/3, numCircles);
        const g = sinToHex(i, 1 * Math.PI * 2/3, numCircles);
        const b = sinToHex(i, 2 * Math.PI * 2/3, numCircles);
        
        return `#${r}${g}${b}`
    }) 
    return colors

}


export const generatePoints= (numCircles, center, a, b) => {
    
    const numbers = Array.from({ length: numCircles}, (el, idx) => idx);

    const points = numbers.map((num, i) => {
        
        const angle = 0.1 * i;
        const x = center.x + (i/(numCircles * a) + i/(numCircles/(4 * b)) * angle)  * Math.cos(angle);
        const y = center.y + (i/(numCircles * a) + i/(numCircles/(4 * b)) * angle) * Math.sin(angle);
        
        return (
            {
                id: i,
                x,
                y
            }
        )
    })
    
    
    
    
    return points
} 
