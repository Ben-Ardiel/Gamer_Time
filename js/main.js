function welcomeUser(){
	var name = prompt("Enter the password: ");
	document.write("Code "+ name + " denied!");
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
function refreshMeme(){
  document.getElementById("Cur") = "*{cursor: url(http://www.rw-designer.com/cursor-extern.php?id=1348), default; }";
}
function piglatin(){
  console.log("Enter your phrase");
  var a = prompt(">");
  var newa = a.split(" ");
  var y = "ay";
  var newb = "No u";
  for (i=0;i=newa.length;i++){
    if (newa[i].length > 3){
      newa[i].charAt(0) = x;
      newa[i].slice(1) = newb;
      newa = newb + x + y;
      console.log(newa);
    }
  }
}