// counter
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset =  document.querySelector('.reset');
const countStart = document.querySelector('.countStart');
var integer = 0;
increment.addEventListener('click', function(){
    integer += 1;
    countStart.innerHTML = integer;
});
decrement.addEventListener('click', function(){
    integer -= 1;
    countStart.innerHTML = integer;
});
reset.addEventListener('click', function(){
    integer = 0;
    countStart.innerHTML = 0;
})