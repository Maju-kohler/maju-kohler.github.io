//lightmode and darkmode
function toggleTheme() { 
    var theme = document.getElementsByTagName ("link")[0]; 

    if (theme.getAttribute('href') == 'styles.css') { 
        theme.setAttribute('href', 'darkmode.css'); 
    } else { 
        theme.setAttribute('href', 'styles.css'); 
    } 
} 

//scrolling behavior 
const navbarLinks = document.querySelectorAll(".navbar a")

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(event){
    smoothScroll(event);
}

function smoothScroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")
    window.scrollTo({
        top: targetId==="#home" ? 0 :document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    });
    
}