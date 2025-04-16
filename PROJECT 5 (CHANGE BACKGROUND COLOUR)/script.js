console.log(Math.floor(Math.random() * 16))
const randomcolor = function() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];

  }
  return color;
}
let change;
const startchangingcolor = function (){
  if(!change){
    change = setInterval(changebgcolor,500);

  }
  function changebgcolor(){
    document.body.style.backgroundColor = randomcolor();
  }
}

document.querySelector('#start').addEventListener('click',startchangingcolor)

const stopchangingcolor = function (){
  clearInterval(change);
  change = null;
 
}

document.querySelector('#stop').addEventListener('click',stopchangingcolor)