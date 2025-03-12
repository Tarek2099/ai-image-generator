import examplePrompts from "../assets/demoinputs.js";
const promptInput = document.querySelector(".prompt-input");
// Fill with random input example;
const randomInput = ()=>{
    const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptInput.value = prompt;
    promptInput.focus()
 }
export default randomInput;