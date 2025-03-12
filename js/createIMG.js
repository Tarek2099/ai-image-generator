const resultGallery = document.querySelector(".result-gallery");
import generateImages from "./generateIMG.js";

const createImgCards = (promptText, selectedModel, countedImg, aspectedRatio)=>{
    resultGallery.innerHTML = "";
    for(let i = 0; i < countedImg; i++){
       
       resultGallery.innerHTML = resultGallery.innerHTML + `<div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectedRatio}">
                             <div class="status-container">
                                 <div class="status">
                                     <div class="spinner"></div>
                                     <i class="fa-solid fa-triangle-exclamation"></i>
                                     <p class="status-text">Generating....</p>
                                 </div>
                             </div>
                         </div>`
    }
    generateImages(promptText, selectedModel, countedImg, aspectedRatio)
 };
 export default createImgCards;