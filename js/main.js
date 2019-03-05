function welcomeUser(){
	var name = prompt("Enter your name: ");
	alert("Welcome "+ name"!");
}
function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 92) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}