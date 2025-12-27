
# theme-switcher-bundler

A **lightweight, JavaScript-only theme switcher** that lets you toggle your entire page between **Light** and **Dark** mode.

No React dependency.  
Works perfectly inside **React apps**, **Vanilla JS**, or any frontend setup.

----------

## ✨ Features

-   🌙 Light / Dark theme switching
    
-   💾 Persists theme using `localStorage`
    
-   ⚡ Instant DOM updates
    
-   🧩 Framework agnostic (React, JS, etc.)
    
-   📦 Small and dependency-free
    
-   🚫 No CSS framework required
    

----------

## 📦 Installation

`npm install theme-switcher-bundler` 

or

`yarn add theme-switcher-bundler` 

----------

## 🚀 Usage in a R`enter code here`eact Application

Although this package is **pure JavaScript**, it integrates cleanly with React.

### 1️⃣ Import the functions

`import { initTheme, toggleTheme } from  "theme-switcher-bundler";` 

----------

### 2️⃣ Initialize theme on app load

    import { useEffect } from  "react"; 
    import { initTheme, toggleTheme } from  "theme-switcher-bundler"; 
    function  App() { 
    useEffect(() => { 
           initTheme(); // applies saved theme on load 
    }, []); 
    return ( 
    	<div>  
	    	<h1>Theme Switcher</h1>
    		<button  onClick={toggleTheme}>Toggle Theme </button> 
        </div>
          );
        } 
    export  default  App;

 

✅ That’s all you need.

----------

## 🖥️ Usage in Plain JavaScript (No React)

`import { initTheme, toggleTheme } from  "theme-switcher-bundler"; // On page load  initTheme(); // On button click  document.getElementById("themeBtn").addEventListener("click", toggleTheme);` 

----------

## 🧠 How It Works

-   Reads theme preference from `localStorage`
    
-   Applies styles directly to `document.documentElement`
    
-   Saves user preference automatically
    
-   No framework state involved
    

----------

## 🎨 Styling Notes

This package handles **logic only**.

You can add transitions or custom styles yourself:

`body { transition: background-color 0.3s ease, color 0.3s ease;
}` 

----------

## 🛠️ API Reference

### `initTheme()`

Initializes and applies the saved theme when the page loads.

----------

### `toggleTheme()`

Toggles between `light` and `dark` themes.
## ⚠️ Important Notes

-   Browser-only package (no SSR)
    
-   Call `initTheme()` only once
    
-   Do not import from `dist` manually
    

----------

## 📄 License

ISC

----------

## 🙌 Author

Built as a learning-focused, real-world npm package.
