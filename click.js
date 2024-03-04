

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white"; 
    event.target.style.height = "100px";
    event.target.style.width = "100px";
});



function clickNo(){
    document.getElementById("yes").style.backgroundColor = "red";
    document.getElementById("yes").style.height = "100px";
    document.getElementById("yes").style.width = "100px";
}

