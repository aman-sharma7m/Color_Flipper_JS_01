const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

var button=document.getElementById('btn');
//console.log(button);
var color=document.querySelector('.color');
//console.log(color);


//event listner
button.addEventListener('click',function(){
  let hexcolor='#';
  for (let i=0;i<=5;i++){
    const random=Math.floor(Math.random()*hex.length);
    hexcolor=hexcolor+hex[random];
  }
  
  document.body.style.backgroundColor=hexcolor;
  color.textContent=hexcolor;
  color.style.color=hexcolor;
});
