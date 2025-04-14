# project related to DOM 

## project links 
[Click Here]()https://stackblitz.com/edit/dom-project-chaiaurcode-udqkda7n?file=index.html

# solution code 


## project 1 

``` JAVASCRIPT 
console.log("VANSH)

const button = document.querySelectorAll('.button')
const body = document.querySelector("body")

button.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
   
  });
});
```
