const clock = document.getElementById('clock')
// document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
 // console.log(date.toLocaleTimeString());
 clock.innerHTML = date.toLocaleTimeString();
//clock.innerHTML = date.toLocaleDateString(); 

//// to return Date 

}, 1000)

const clock_one = document.getElementById('clock_one')

setInterval(function () {
  let time = new Date()
  clock_one.innerHTML = time.toLocaleDateString()
}, 1000)