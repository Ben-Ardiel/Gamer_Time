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
  var x = prompt("What is your plaintext? (please enter more than 10 characters)");
  var nx = x.split(" ");
  var nys ="";
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
  nys = nys.toLowerCase();
  alert(nys);
  var fin="";
  var gametime="";
  var z=nys.length-1;
  var zex=z%3;
  var zmole=(Math.floor(z/3))*3;
  console.log(z+" "+zex+" "+zmole);
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
  var peph=".";
  var exph="!";
  var quph="?";
  var coph=",";
  if (zex==1){
    nys += "aa";
    z+= 2;
  }
  else if (zex==2){
    nys +="a";
    z+= 1;
  }
  for(var i=0;i<zmole;i++){
    var f3 = nys.slice(0+(3*i),3+(3*i));
    console.log(f3);
    var ran = Math.floor(Math.random()*44)+10;
    console.log(ran);
    if(z==3*i){
      ran = zmole;
    }
    gametime+=ran;
    for(var j=0;j<3;j++){
      var letat=f3.charAt(j);
      if (letat==aph){
        fin += (13 + ran);
      }
      if (letat==bph){
        fin += (14 + ran);
      }
      if (letat==cph){
        fin += (15 + ran);
      }
      if (letat==dph){
        fin += (16 + ran);
      }
      if (letat==eph){
        fin += (17 + ran);
      }
      if (letat==fph){
        fin += (18 + ran);
      }
      if (letat==gph){
        fin += (19 + ran);
      }
      if (letat==hph){
        fin += (20 + ran);
      }
      if (letat==iph){
        fin += (21 + ran);
      }
      if (letat==jph){
        fin += (22 + ran);
      }
      if (letat==kph){
        fin += (23 + ran);
      }
      if (letat==lph){
        fin += (24 + ran);
      }
      if (letat==mph){
        fin += (25 + ran);
      }
      if (letat==nph){
        fin += (26 + ran);
      }
      if (letat==oph){
        fin += (27 + ran);
      }
      if (letat==pph){
        fin += (28 + ran);
      }
      if (letat==qph){
        fin += (29 + ran);
      }
      if (letat==rph){
        fin += (30 + ran);
      }
      if (letat==sph){
        fin += (31 + ran);
      }
      if (letat==tph){
        fin += (32 + ran);
      }
      if (letat==uph){
        fin += (33 + ran);
      }
      if (letat==vph){
        fin += (34 + ran);
      }
      if (letat==wph){
        fin += (35 + ran);
      }
      if (letat==xph){
        fin += (36 + ran);
      }
      if (letat==yph){
        fin += (37 + ran);
      }
      if (letat==zph){
        fin += (38 + ran);
      }
      if (letat==_ph){
        fin += (39 + ran);
      }
      if (letat==peph){
        fin += (40 + ran);
      }
      if (letat==exph){
        fin += (41 + ran);
      }
      if (letat==quph){
        fin += (42 + ran);
      }
      if (letat==coph){
        fin += (43 + ran);
      }
    }
  }
  fin+=gametime+' '+z;
  console.log(z);
  document.getElementById("ans").innerHTML = fin;
}
function firstDecrypt(){
  var fin = prompt("What is your cypher text?");
  var arkey = fin.split(" ");
  var nys = arkey[0];
  var key = arkey[1];
  var knum = (key/3)*2;
  var crnum = key*2;
  console.log("Key: "key", knum: "knum", crnum: "crnum".");
  var nxs = nys.split(0, crnum);
  var nxbs = nys.split(crnum+2, crnum+knum+2);
  for(i=0; i<knum; i++){
    for(j=0; j<3; j++){
      for(g=0; g<2; g++){
        
      }
    }
  }
}