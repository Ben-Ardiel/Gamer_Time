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
  console.log(a);
  var newa = a.split(" ");
  console.log(newa);
  var y = "ay";
  console.log(y);
  var newb = "No u";
  console.log(newb);
  var x = "No u";
  console.log(x);
  var newesta = "Output =";
  for (i=0;i<newa.length;i++){
    if (newa[i].length > 3){
      console.log(newa);
      x = newa[i].charAt(0);
      console.log(x);
      newb = newa[i].slice(1);
      console.log(newb);
      newc = newb + x + y;
      console.log(newc);
      newesta = newesta + " " + newc;
    }
    else{
      console.log(newa[i]);
      newesta = newesta + " " + newa[i];
    }
  }
  alert(newesta)
}
function firstCypher(){
  var x = prompt("What is your plaintext?");
  var nx = x.split(" ");
  var nys =""
  console.log(nx);
  for(var j=0;j<nx.length;j++){
    console.log(j);
    for(var i=nx[j].length;i>-1;i--){
      console.log(i);
      nys = nys + nx[j].charAt(i);
      console.log(nys);
    }
    nys = nys + " ";
  }
  alert(nys);
  var fin=""
  var gametime = 0
  var z=nys.length;
  var zex=z%3;
  var zig=Math.ceiling(z/3)
  var ran=Math.floor(Math.random()*70)
  var aph="a";
  var bph="b";
  var cph="c";
  var dph="d";
  var eph="e";
  var fph="f";
  var gph="g";
  var hph="h";
  var iph="i";
  var jph="j";
  var kph="k";
  var lph="l";
  var mph="m";
  var nph="n";
  var oph="o";
  var pph="p";
  var qph="q";
  var rph="r";
  var sph="s";
  var tph="t";
  var uph="u";
  var vph="v";
  var wph="w";
  var xph="x";
  var yph="y";
  var zph="z";
  var _ph=" ";
  var .ph=".";
  var exph="!";
  var quph="?";
  var coph=",";
  if (zex==1){
    nys += "  ";
    z+= 2;
  }
  else if (zex==2){
    nys +=" ";
    z+= 1;
  }
}