/* window.onclick = (e) => {
    console.log(e.target.className);
    if (e.target.id == 11 || e.target.id == 111 || e.target.id == 1111){
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "flex";
        var Asel = 1;
    }
    else if (e.target.id == 12 || e.target.id == 122 || e.target.id == 1222){
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "flex";
        var Asel = 2;
    }
    else if (e.target.id == 13 || e.target.id == 133 || e.target.id == 1333){
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "flex";
        var Asel = 3;
    }
    else if (e.target.id == 4 || e.target.id == 144 || e.target.id == 1444){
        document.getElementById("1").style.display = "none";
        document.getElementById("2").style.display = "flex";
        var Asel = 4;
    }
} */


function expand(){
    document.querySelector("#openM").style.display = 'none';
    document.querySelector(".navButtonsM").style.animation = "open 600ms forwards";
    document.getElementById("ButtonsM1").style.display = "flex";
    document.getElementById("ButtonsM1").style.animation = "options 800ms forwards";
}