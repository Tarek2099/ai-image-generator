const toggleTheme = document.querySelector('.theme-toggle');
const promptBtn = document.querySelector(".prompt-btn");
const promptForm = document.querySelector(".prompt-form");
import themeChange from "./theme.js";
import handleFormSubmit from "./formSubmission.js";
import randomInput from "./randomInput.js";


// Set theme based on saved preference or system default;
(()=>{
   const savedTheme = localStorage.getItem("Theme");
   const windowPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
   const isDarkTheme = savedTheme === "dark" || (!savedTheme && windowPreference);
   document.body.classList.toggle("dark-theme", isDarkTheme)
   
   toggleTheme.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"
   
})()



// Fill prompt with random example;
promptBtn.addEventListener("click", randomInput);
// Handle Form Submission
promptForm.addEventListener("submit", handleFormSubmit);
// Theme Change 
toggleTheme.addEventListener("click", themeChange);

