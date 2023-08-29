// UI Elements
const toggle = document.getElementById("toggle"),
			circle = document.querySelector(".circle"),
      body = document.querySelector("body");
let span = document.getElementById("shift");
let theme = "bright";

// Helper function for setting theme parameters
// "params" needs to be written like object {"key1": "value1", "key2": "value2", ...}
function setStyles(element, params) {
  for(let i in params) {
    element.style.setProperty(i, params[i]);
  }
}

// Main logic
function themeChange() {
	theme = theme === "bright" ? "dark" : "bright";
  document.querySelector("article > h2").textContent = `Too ${theme}?`;
  
  if(theme === "bright") {
    setStyles(body, {"--background": "#FBFFF1", "--text": "#3C3744", "--accent": "#F49F6E"});
		
    toggle.classList.remove("clicked");
    circle.classList.remove("clicked");
    span.textContent = `brighter and darker.`;
    
  } else {
      setStyles(body, {"--background": "#3C3744", "--text": "#FBFFF1", "--accent": "#C0E7F0"});
    
      toggle.classList.add("clicked");
      circle.classList.add("clicked");
      span.textContent = `darker and brighter.`;
    }
}

// Event listener for toggle button click
toggle.addEventListener("click", themeChange);