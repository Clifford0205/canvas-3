import {randomIntFromRange,randomColor,distance} from './utils';

const body =document.querySelector('body');
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth;
canvas.height=window.innerHeight;
console.log(canvas.width);



console.log(window.innerHeight);
console.log(body.clientHeight);

const mouse = {
    x: null,
    y: null
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

var gravity =1; 

var friction=0.59;

console.log(document.documentElement.clientWidth);

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});


addEventListener('click', () => {
    init();
});

console.log(document.documentElement.clientWidth);

// Objects 單顆球球 地心引力
class Circle {
    constructor(x,y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    update() { 
        this.draw();
    }
}

// Implementation
let circle1;
let circle2;
function init() {
    circle1=new Circle(300,300,100,'black');
    circle2=new Circle(null,null,30,'red');
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    circle1.update();
    circle2.x=mouse.x;
    circle2.y=mouse.y;
    circle2.update();

    if(distance(circle1.x,circle1.y,circle2.x,circle2.y)<circle1.radius+circle2.radius){
        circle1.color='red';
    }else{
        circle1.color='black';
    }
    // console.log(distance(circle1.x,circle1.y,circle2.x,circle2.y));
    
}

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(window.innerHeight);
init();
animate();



