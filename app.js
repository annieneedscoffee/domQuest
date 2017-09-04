let total = document.getElementById('total');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
var z = 0
var counter = parseInt(z);
button1.addEventListener("click", function(){
var x = Math.random();
var y = x*10 +10;
var z = y.toFixed();
var a = parseInt(z)
counter = counter + a;
total.innerHTML = counter;
})

button2.addEventListener("click", function(){
var x = Math.random();
var y = x*20+30;
var z = y.toFixed();
var a = parseInt(z)
counter = counter + a;
total.innerHTML = counter;
})

button3.addEventListener("click", function(){
var x = Math.random();
var y = x*30+70;
var z = y.toFixed();
var a = parseInt(z)
counter = counter + a;
total.innerHTML = counter;
})
