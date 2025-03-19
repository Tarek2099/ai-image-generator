const getImgDimensions = (aspectedRatio, baseSize = 512)=>{
    const [width, height] = aspectedRatio.split("/").map(Number);
    const scaleFactor = baseSize / Math.sqrt(width * height);
    let calculateWidth = Math.round(width * scaleFactor);
    let calculateHeight = Math.round(height * scaleFactor);
    
    // Ensures Dimensions are multiples of 16 (AI requirements)
    calculateHeight = Math.floor(calculateHeight / 16) * 16;
    calculateWidth = Math.floor(calculateWidth / 16) * 16;
    

    return{width: calculateWidth, height: calculateHeight}
}
export default getImgDimensions;