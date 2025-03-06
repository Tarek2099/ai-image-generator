const toggleTheme = document.querySelector('.toggleTheme');

// Switch between light and dark theme
const themeChange = ()=>{
   const isDark = document.body.classList.toggle("dark-theme");
   toggleTheme.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"
}
toggleTheme.addEventListener("click", themeChange)