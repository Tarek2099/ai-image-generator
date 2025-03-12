const toggleTheme = document.querySelector('.theme-toggle');
// Switch between light and dark theme
const themeChange = ()=>{
    const isDark = document.body.classList.toggle("dark-theme");
    // Set items in local storage
    localStorage.setItem("Theme", isDark ? "dark" : "light");
    toggleTheme.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"
 }
 export default themeChange;