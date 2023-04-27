export function rgb(r: number, g: number, b: number): string {
    return componentToHex(r) + componentToHex(g) + componentToHex(b)
  }
  
  function componentToHex(color: number): string {
   
    if (color<0){
        color = 0;
    }
    if (color>255){
        color = 255
    }
    var hex = color.toString(16).toUpperCase()
    return hex.length === 1 ? "0" + hex : hex;
  }
console.log(rgb(300,0,-20));