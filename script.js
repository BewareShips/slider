document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById("slider-right").onclick = sliderRight;
let left = 0;
let right = 0;



function sliderLeft(){
    let polosa = document.getElementById('polosa');
    left = left - 220;
    if(left < -1980){
        left = 0;
    }
    polosa.style.left = left+'px';
}




function sliderRight(){
    let pol = document.getElementById("polosa");
    right = right +220;
    if (right < 1980){
        right = 0;
    }
    pol.style.right = rigth+'px';
}