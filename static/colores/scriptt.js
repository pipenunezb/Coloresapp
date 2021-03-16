var R1 = document.getElementById("R1");
var G1 = document.getElementById("G1");
var B1 = document.getElementById("B1");
var R2 = document.getElementById("R2");
var G2 = document.getElementById("G2");
var B2 = document.getElementById("B2");
var R3 = document.getElementById("R3");
var G3 = document.getElementById("G3");
var B3 = document.getElementById("B3");
var R4 = document.getElementById("R4");
var G4 = document.getElementById("G4");
var B4 = document.getElementById("B4");
var R5 = document.getElementById("R5");
var G5 = document.getElementById("G5");
var B5 = document.getElementById("B5");
var Re = document.getElementById("Re");
var Ge = document.getElementById("Ge");
var Be = document.getElementById("Be");

var bgc1 = document.getElementById("bg-c1");
var bgc2 = document.getElementById("bg-c2");
var bgc3 = document.getElementById("bg-c3");
var bgc4 = document.getElementById("bg-c4");
var bgc5 = document.getElementById("bg-c5");
var bgce = document.getElementById("bg-re");

var re1 = document.getElementById("re1");
var re2 = document.getElementById("re2");
var re3 = document.getElementById("re3");
var re4 = document.getElementById("re4");
var re5 = document.getElementById("re5");

R1.oninput = function() {bgc1.style.cssText = "background-color: rgb(" + R1.value + "," + G1.value + "," + B1.value + ")"; re1.style.cssText = "background-color: rgb(" + R1.value + "," + G1.value + "," + B1.value + ")";}
G1.oninput = function() {bgc1.style.cssText = "background-color: rgb(" + R1.value + "," + G1.value + "," + B1.value + ")"; re1.style.cssText = "background-color: rgb(" + R1.value + "," + G1.value + "," + B1.value + ")";}
B1.oninput = function() {bgc1.style.cssText = "background-color: rgb(" + R1.value + "," + G1.value + "," + B1.value + ")"; re1.style.cssText = "background-color: rgb(" + R1.value + "," + G1.value + "," + B1.value + ")";}

R2.oninput = function() {bgc2.style.cssText = "background-color: rgb(" + R2.value + "," + G2.value + "," + B2.value + ")"; re2.style.cssText = "background-color: rgb(" + R2.value + "," + G2.value + "," + B2.value + ")";}
G2.oninput = function() {bgc2.style.cssText = "background-color: rgb(" + R2.value + "," + G2.value + "," + B2.value + ")"; re2.style.cssText = "background-color: rgb(" + R2.value + "," + G2.value + "," + B2.value + ")";}
B2.oninput = function() {bgc2.style.cssText = "background-color: rgb(" + R2.value + "," + G2.value + "," + B2.value + ")"; re2.style.cssText = "background-color: rgb(" + R2.value + "," + G2.value + "," + B2.value + ")";}

R3.oninput = function() {bgc3.style.cssText = "background-color: rgb(" + R3.value + "," + G3.value + "," + B3.value + ")"; re3.style.cssText = "background-color: rgb(" + R3.value + "," + G3.value + "," + B3.value + ")";}
G3.oninput = function() {bgc3.style.cssText = "background-color: rgb(" + R3.value + "," + G3.value + "," + B3.value + ")"; re3.style.cssText = "background-color: rgb(" + R3.value + "," + G3.value + "," + B3.value + ")";}
B3.oninput = function() {bgc3.style.cssText = "background-color: rgb(" + R3.value + "," + G3.value + "," + B3.value + ")"; re3.style.cssText = "background-color: rgb(" + R3.value + "," + G3.value + "," + B3.value + ")";}

R4.oninput = function() {bgc4.style.cssText = "background-color: rgb(" + R4.value + "," + G4.value + "," + B4.value + ")"; re4.style.cssText = "background-color: rgb(" + R4.value + "," + G4.value + "," + B4.value + ")";}
G4.oninput = function() {bgc4.style.cssText = "background-color: rgb(" + R4.value + "," + G4.value + "," + B4.value + ")"; re4.style.cssText = "background-color: rgb(" + R4.value + "," + G4.value + "," + B4.value + ")";}
B4.oninput = function() {bgc4.style.cssText = "background-color: rgb(" + R4.value + "," + G4.value + "," + B4.value + ")"; re4.style.cssText = "background-color: rgb(" + R4.value + "," + G4.value + "," + B4.value + ")";}

R5.oninput = function() {bgc5.style.cssText = "background-color: rgb(" + R5.value + "," + G5.value + "," + B5.value + ")"; re5.style.cssText = "background-color: rgb(" + R5.value + "," + G5.value + "," + B5.value + ")";}
G5.oninput = function() {bgc5.style.cssText = "background-color: rgb(" + R5.value + "," + G5.value + "," + B5.value + ")"; re5.style.cssText = "background-color: rgb(" + R5.value + "," + G5.value + "," + B5.value + ")";}
B5.oninput = function() {bgc5.style.cssText = "background-color: rgb(" + R5.value + "," + G5.value + "," + B5.value + ")"; re5.style.cssText = "background-color: rgb(" + R5.value + "," + G5.value + "," + B5.value + ")";}

Re.oninput = function() {bgce.style.cssText = "background-color: rgb(" + Re.value + "," + Ge.value + "," + Be.value + ")";}
Ge.oninput = function() {bgce.style.cssText = "background-color: rgb(" + Re.value + "," + Ge.value + "," + Be.value + ")";}
Be.oninput = function() {bgce.style.cssText = "background-color: rgb(" + Re.value + "," + Ge.value + "," + Be.value + ")";}



var color1 = document.getElementById("color1");
var value1 = document.getElementById("value1");
var C1 = document.getElementById("C1");
value1.innerHTML = color1.value;

var color2 = document.getElementById("color2");
var value2 = document.getElementById("value2");
var C2 = document.getElementById("C2");
value2.innerHTML = color2.value;

var color3 = document.getElementById("color3");
var value3 = document.getElementById("value3");
var C3 = document.getElementById("C3");
value3.innerHTML = color3.value;

var color4 = document.getElementById("color4");
var value4 = document.getElementById("value4");
var C4 = document.getElementById("C4");
value4.innerHTML = color4.value;

var color5 = document.getElementById("color5");
var value5 = document.getElementById("value5");
var C5 = document.getElementById("C5");
value5.innerHTML = color5.value;

var tot = document.getElementById("total");
var total = 0;

var AnsR = document.getElementById("AnsR");
var AnsG = document.getElementById("AnsG");
var AnsB = document.getElementById("AnsB");
var bgans = document.getElementById("bg-ans");

var Rans = Gans = Bans = 0;

var peso = document.getElementById("peso");
var cant1 = document.getElementById("cant1");
var cant2 = document.getElementById("cant2");
var cant3 = document.getElementById("cant3");
var cant4 = document.getElementById("cant4");
var cant5 = document.getElementById("cant5");


color1.oninput = function() {
  value1.innerHTML = this.value;
  total = parseInt(color1.value) + parseInt(color2.value) + parseInt(color3.value) + parseInt(color4.value) + parseInt(color5.value);
  tot.innerHTML = total;

  por1 = parseInt(color1.value)/total;
  por2 = parseInt(color2.value)/total;
  por3 = parseInt(color3.value)/total;
  por4 = parseInt(color4.value)/total;
  por5 = parseInt(color5.value)/total;

  C1.innerHTML = Math.round(por1*10000)/100;
  C2.innerHTML = Math.round(por2*10000)/100;
  C3.innerHTML = Math.round(por3*10000)/100;
  C4.innerHTML = Math.round(por4*10000)/100;
  C5.innerHTML = Math.round(por5*10000)/100;

  Rans = (R1.value*por1) + (R2.value*por2) + (R3.value*por3) + (R4.value*por4) + (R5.value*por5);
  Gans = (G1.value*por1) + (G2.value*por2) + (G3.value*por3) + (G4.value*por4) + (G5.value*por5);
  Bans = (B1.value*por1) + (B2.value*por2) + (B3.value*por3) + (B4.value*por4) + (B5.value*por5);
  bgans.style.cssText = "background-color: rgb(" + Rans + "," + Gans + "," + Bans + ")";

  AnsR.innerHTML = Math.round(Rans*100)/100;
  AnsG.innerHTML = Math.round(Gans*100)/100;
  AnsB.innerHTML = Math.round(Bans*100)/100;

  cant1.innerHTML = Math.round(peso.value*por1*100)/100;
  cant2.innerHTML = Math.round(peso.value*por2*100)/100;
  cant3.innerHTML = Math.round(peso.value*por3*100)/100;
  cant4.innerHTML = Math.round(peso.value*por4*100)/100;
  cant5.innerHTML = Math.round(peso.value*por5*100)/100;

}
color2.oninput = function() {
  value2.innerHTML = this.value;
  total = parseInt(color1.value) + parseInt(color2.value) + parseInt(color3.value) + parseInt(color4.value) + parseInt(color5.value);
  tot.innerHTML = total;

  por1 = parseInt(color1.value)/total;
  por2 = parseInt(color2.value)/total;
  por3 = parseInt(color3.value)/total;
  por4 = parseInt(color4.value)/total;
  por5 = parseInt(color5.value)/total;

  C1.innerHTML = Math.round(por1*10000)/100;
  C2.innerHTML = Math.round(por2*10000)/100;
  C3.innerHTML = Math.round(por3*10000)/100;
  C4.innerHTML = Math.round(por4*10000)/100;
  C5.innerHTML = Math.round(por5*10000)/100;

  Rans = (R1.value*por1) + (R2.value*por2) + (R3.value*por3) + (R4.value*por4) + (R5.value*por5);
  Gans = (G1.value*por1) + (G2.value*por2) + (G3.value*por3) + (G4.value*por4) + (G5.value*por5);
  Bans = (B1.value*por1) + (B2.value*por2) + (B3.value*por3) + (B4.value*por4) + (B5.value*por5);
  bgans.style.cssText = "background-color: rgb(" + Rans + "," + Gans + "," + Bans + ")";

  AnsR.innerHTML = Math.round(Rans*100)/100;
  AnsG.innerHTML = Math.round(Gans*100)/100;
  AnsB.innerHTML = Math.round(Bans*100)/100;

  cant1.innerHTML = Math.round(peso.value*por1*100)/100;
  cant2.innerHTML = Math.round(peso.value*por2*100)/100;
  cant3.innerHTML = Math.round(peso.value*por3*100)/100;
  cant4.innerHTML = Math.round(peso.value*por4*100)/100;
  cant5.innerHTML = Math.round(peso.value*por5*100)/100;

}
color3.oninput = function() {
  value3.innerHTML = this.value;
  total = parseInt(color1.value) + parseInt(color2.value) + parseInt(color3.value) + parseInt(color4.value) + parseInt(color5.value);
  tot.innerHTML = total;

  por1 = parseInt(color1.value)/total;
  por2 = parseInt(color2.value)/total;
  por3 = parseInt(color3.value)/total;
  por4 = parseInt(color4.value)/total;
  por5 = parseInt(color5.value)/total;

  C1.innerHTML = Math.round(por1*10000)/100;
  C2.innerHTML = Math.round(por2*10000)/100;
  C3.innerHTML = Math.round(por3*10000)/100;
  C4.innerHTML = Math.round(por4*10000)/100;
  C5.innerHTML = Math.round(por5*10000)/100;

  Rans = (R1.value*por1) + (R2.value*por2) + (R3.value*por3) + (R4.value*por4) + (R5.value*por5);
  Gans = (G1.value*por1) + (G2.value*por2) + (G3.value*por3) + (G4.value*por4) + (G5.value*por5);
  Bans = (B1.value*por1) + (B2.value*por2) + (B3.value*por3) + (B4.value*por4) + (B5.value*por5);
  bgans.style.cssText = "background-color: rgb(" + Rans + "," + Gans + "," + Bans + ")";

  AnsR.innerHTML = Math.round(Rans*100)/100;
  AnsG.innerHTML = Math.round(Gans*100)/100;
  AnsB.innerHTML = Math.round(Bans*100)/100;

  cant1.innerHTML = Math.round(peso.value*por1*100)/100;
  cant2.innerHTML = Math.round(peso.value*por2*100)/100;
  cant3.innerHTML = Math.round(peso.value*por3*100)/100;
  cant4.innerHTML = Math.round(peso.value*por4*100)/100;
  cant5.innerHTML = Math.round(peso.value*por5*100)/100;

}
color4.oninput = function() {
  value4.innerHTML = this.value;
  total = parseInt(color1.value) + parseInt(color2.value) + parseInt(color3.value) + parseInt(color4.value) + parseInt(color5.value);
  tot.innerHTML = total;

  por1 = parseInt(color1.value)/total;
  por2 = parseInt(color2.value)/total;
  por3 = parseInt(color3.value)/total;
  por4 = parseInt(color4.value)/total;
  por5 = parseInt(color5.value)/total;

  C1.innerHTML = Math.round(por1*10000)/100;
  C2.innerHTML = Math.round(por2*10000)/100;
  C3.innerHTML = Math.round(por3*10000)/100;
  C4.innerHTML = Math.round(por4*10000)/100;
  C5.innerHTML = Math.round(por5*10000)/100;

  Rans = (R1.value*por1) + (R2.value*por2) + (R3.value*por3) + (R4.value*por4) + (R5.value*por5);
  Gans = (G1.value*por1) + (G2.value*por2) + (G3.value*por3) + (G4.value*por4) + (G5.value*por5);
  Bans = (B1.value*por1) + (B2.value*por2) + (B3.value*por3) + (B4.value*por4) + (B5.value*por5);
  bgans.style.cssText = "background-color: rgb(" + Rans + "," + Gans + "," + Bans + ")";

  AnsR.innerHTML = Math.round(Rans*100)/100;
  AnsG.innerHTML = Math.round(Gans*100)/100;
  AnsB.innerHTML = Math.round(Bans*100)/100;

  cant1.innerHTML = Math.round(peso.value*por1*100)/100;
  cant2.innerHTML = Math.round(peso.value*por2*100)/100;
  cant3.innerHTML = Math.round(peso.value*por3*100)/100;
  cant4.innerHTML = Math.round(peso.value*por4*100)/100;
  cant5.innerHTML = Math.round(peso.value*por5*100)/100;

}
color5.oninput = function() {
  value5.innerHTML = this.value;
  total = parseInt(color1.value) + parseInt(color2.value) + parseInt(color3.value) + parseInt(color4.value) + parseInt(color5.value);
  tot.innerHTML = total;

  por1 = parseInt(color1.value)/total;
  por2 = parseInt(color2.value)/total;
  por3 = parseInt(color3.value)/total;
  por4 = parseInt(color4.value)/total;
  por5 = parseInt(color5.value)/total;

  C1.innerHTML = Math.round(por1*10000)/100;
  C2.innerHTML = Math.round(por2*10000)/100;
  C3.innerHTML = Math.round(por3*10000)/100;
  C4.innerHTML = Math.round(por4*10000)/100;
  C5.innerHTML = Math.round(por5*10000)/100;

  Rans = (R1.value*por1) + (R2.value*por2) + (R3.value*por3) + (R4.value*por4) + (R5.value*por5);
  Gans = (G1.value*por1) + (G2.value*por2) + (G3.value*por3) + (G4.value*por4) + (G5.value*por5);
  Bans = (B1.value*por1) + (B2.value*por2) + (B3.value*por3) + (B4.value*por4) + (B5.value*por5);
  bgans.style.cssText = "background-color: rgb(" + Rans + "," + Gans + "," + Bans + ")";

  AnsR.innerHTML = Math.round(Rans*100)/100;
  AnsG.innerHTML = Math.round(Gans*100)/100;
  AnsB.innerHTML = Math.round(Bans*100)/100;

  cant1.innerHTML = Math.round(peso.value*por1*100)/100;
  cant2.innerHTML = Math.round(peso.value*por2*100)/100;
  cant3.innerHTML = Math.round(peso.value*por3*100)/100;
  cant4.innerHTML = Math.round(peso.value*por4*100)/100;
  cant5.innerHTML = Math.round(peso.value*por5*100)/100;
}

peso.oninput = function() {
  total = parseInt(color1.value) + parseInt(color2.value) + parseInt(color3.value) + parseInt(color4.value) + parseInt(color5.value);

  por1 = parseInt(color1.value)/total;
  por2 = parseInt(color2.value)/total;
  por3 = parseInt(color3.value)/total;
  por4 = parseInt(color4.value)/total;
  por5 = parseInt(color5.value)/total;

  cant1.innerHTML = Math.round(peso.value*por1*100)/100;
  cant2.innerHTML = Math.round(peso.value*por2*100)/100;
  cant3.innerHTML = Math.round(peso.value*por3*100)/100;
  cant4.innerHTML = Math.round(peso.value*por4*100)/100;
  cant5.innerHTML = Math.round(peso.value*por5*100)/100;
}
