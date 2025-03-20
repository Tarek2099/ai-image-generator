const API_KEY = "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";
import getImgDimensions from "./getDimensions.js";
import updateImages from "./updateImages.js";
const imgCard = document.querySelector(".img-card");
const generateButton = document.querySelector(".generate-button");
const statusText = document.querySelector(".status-text");

// Generate Image using AI;
const generateImages = async (promptText, selectedModel, countedImg, aspectedRatio)=>{
    const Model_URL = `https://router.huggingface.co/hf-inference/models/${selectedModel}`;
    const {width, height} = getImgDimensions(aspectedRatio);
    generateButton.setAttribute("disabled", "true")

    // Create an image generation promises
    const imagePromises = Array.from({length: countedImg}, async(_, i)=>{
        try{
            const response = await fetch(Model_URL, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                    "x-use-cache": "false",
                },
                method: "POST",
                body: JSON.stringify({
                    inputs: promptText,
                    parameters: {width, height},
    
                })
            });
            if(!response.ok) throw new Error((await response.json())?.error)
            const result = await response.blob();

        // Convert response to an image and update to updateImages
            updateImages(i, URL.createObjectURL(result))
        }catch(error){
            console.log(error);
           const getImg = document.getElementById(`img-card-${i}`);
            getImg.classList.replace("loading", "error");
            statusText.innerHTML = "Generation failed! for more details in console"
        }
    })
    
    await Promise.allSettled(imagePromises);
    generateButton.removeAttribute("disabled")
}
export default generateImages;