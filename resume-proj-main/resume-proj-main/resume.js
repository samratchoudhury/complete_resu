// window.alert('hello');
// console.log('log');
var hamburger = document.getElementById("hamburger");
var horizontal_list = document.getElementById('navUl');

// hamburger.addEventListner('click',() =>{
//     horizontal_list.classList.toggle('show');
// });

hamburger.addEventListener('click', function(){
	window.alert('button presses');
})