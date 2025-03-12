const selectModel = document.getElementById("selectModel");
const imageCount = document.getElementById("imageCount");
const aspectRatio = document.getElementById("aspectRatio");
const promptInput = document.querySelector(".prompt-input");
import createImgCards from "./createIMG.js";
// Handle Form submition;
const handleFormSubmit = (event)=>{
    event.preventDefault();
 
    // Get values from input and selection fields;
    const promptText = promptInput.value;
    const selectedModel = selectModel.value;
    const countedImg = parseInt(imageCount.value) || 1;
    const aspectedRatio = aspectRatio.value || "1/1";
 
    createImgCards(promptText, selectedModel, countedImg, aspectedRatio)
    
 }
 export default handleFormSubmit;