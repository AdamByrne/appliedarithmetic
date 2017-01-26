//defining variables
var gincome,scutoff,srate,hrate,tcredits;

function getData() {
  //getting values from interface and embedding them in the variables
  gincome = document.getElementById("gincome").value;
  scutoff = document.getElementById("scutoff").value;
  srate = document.getElementById("srate").value;
  hrate = document.getElementById("hrate").value;
  tcredits = document.getElementById("tcredits").value;
}

function calc() {
  //get values
  getData();

  //make calculations
  var sttax = (scutoff / 100) * srate;
  var hitax = ((gincome - scutoff) / 100) * hrate;
  var grosstax = (hitax + sttax);
  var nettax = grosstax - tcredits;
  var netincome = gincome - nettax;

  //show answers in the interface
  var gtax = document.getElementById("gtax").innerHTML = grosstax;
  var ntax = document.getElementById("ntax").innerHTML = nettax;
  var nincome = document.getElementById("nincome").innerHTML = netincome;
}

function reset() {
  //reload page
  location.reload();
}
