const animation = document.getElementById("animation");
const main_title = document.getElementById("main_title");

const circle_count = 30;
const circle_width_outer = 20;
const circle_width_inner = 10;

animation.style.width = (circle_count * circle_width_outer).toString() + "px";
animation.style.height = "100px";

circles = []
circlesX = []
circlesY = []
circlesY_Vel = []

for (let index = 0; index < circle_count; index++) {
    const circle = document.createElement("div"); 
    circle.id = "circle";
    circle.style.marginLeft = ((circle_width_outer - circle_width_inner) / 2).toString() + "px";
    circle.style.marginRight = ((circle_width_outer - circle_width_inner) / 2).toString() + "px";
    animation.appendChild(circle);
    circles.push(circle);
    circlesX.push(0);
    circlesY.push(0);
    circlesY_Vel.push(0);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

const refreshRate = 1000 / 60;

var universal_tick = 0;
var universal_sin = 0;

var final_title = "isak.io";

function step() 
{
    main_title.innerHTML = final_title.substring(0, Math.floor(universal_tick/10));

    if ((universal_tick < 300) && (Math.floor(universal_tick/20) % 2 == 0)) {
        main_title.innerHTML += "_"
    }
    

    universal_tick += 1;
    universal_sin = Math.sin(2*toRadians(universal_tick));

    for (let index = 0; index < circles.length; index++) 
    {
        const circle = circles[index];

        circlesX[index] += (30+index) /7;
        circlesY[index] = (30* Math.sin(toRadians(circlesX[index])));

        circle.style.marginTop = (circlesY[index]).toString() + "px";
        

        const size =  1.5 + 0.05*(Math.cos(toRadians(circlesX[index])))

        circle.style.transform = "scale(" + (size).toString() + ")";9


        var r = (128 + ((circlesY[index] / 30) * 127)).toString();
        var g = (128 + ((circlesY[index] / 30) * 127)).toString();
        var b = (128 + ((circlesY[index] / 30) * 127)).toString();
        
        circle.style.backgroundColor = "#ffdb58";//"rgb(" + r + ", " + g + ", " + b + ")";
        
    }



    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
