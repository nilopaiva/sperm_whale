var r = 0;
var s = 1; 
var o = 0.01;
var o2 = 1;
function positionRocks(){
    smoke = document.querySelector(".smoke");
    if(s<= 215 && smoke.style.top < 1)
        s+=5.15;
    o+=0.03;
    o2-=0.03;

    shark = document.querySelector(".shark");
    shark.style.top = -window.pageYOffset/3 + 280 +"px";

    octopos = document.querySelector(".octopos");
    octopos.style.top = window.pageYOffset/3 + 180 +"px";

    octopos.style.opacity = 1 - window.pageYOffset/300;

    smoke.style.top = window.pageYOffset/3 + 130 +"px";
    smoke.style.opacity = 0 + window.pageYOffset/300;


    if(window.innerWidth >= window.pageYOffset/3 + 590 + 520){
        smoke.style.left = window.pageYOffset/3 +590+"px";
        octopos.style.left = window.pageYOffset/3 +680+"px";
        shark.style.left = window.pageYOffset/3 +80+"px";
    }
    console.log("largura tela", window.innerWidth);
    console.log("animacao", window.pageYOffset/3 + 1000)
}
document.addEventListener("scroll", positionRocks);