let cercle =document.querySelector(".cercle");
let bar = document.querySelector(".nav-bar")

window.addEventListener("mousemove", (e) =>{
    cercle.style.top = e.pageY +"px";
    cercle.style.left = e.pageX +"px";
    });

    window.addEventListener("click", () => {

    let red = Math.floor(Math.random() *256)
    let green = Math.floor(Math.random() *256)
    let blue = Math.floor(Math.random() *256)
    
    let ColorBar = `rgb(${red}, ${green}, ${blue})`;  
    document.querySelector(".nav-bar").style.background = ColorBar;
})