const colors=['green','red','rgba(133,245,200)','#f15025'];

var button=document.getElementById('btn');
//console.log(button);
var color=document.querySelector('.color');
//console.log(color);
var simple=document.querySelectorAll('.nav-links li');
simple[0].style.backgroundColor='#80808047';


//event listner
button.addEventListener('click',function(){
  // get random number bw 0,3
  const random=Math.floor(Math.random()*4);
  document.body.style.backgroundColor=colors[random];
  color.textContent=colors[random];
  color.style.color=colors[random];
});
