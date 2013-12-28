if ( window.svgDocument == null ) svgDocument = evt.target.ownerDocument;
// Variables, lots and lots of variables:
var leftSluice = svgDocument.getElementById("leftSluice");
var leftGate = svgDocument.getElementById("leftGate");
var rightSluice = svgDocument.getElementById("rightSluice");
var rightGate = svgDocument.getElementById("rightGate");
var water = svgDocument.getElementById("water");
var boat = svgDocument.getElementById("narrowBoat");
var leftSluiceUp = svgDocument.getElementById("leftSluiceUp");
var leftSluiceDown = svgDocument.getElementById("leftSluiceDown");
var rightSluiceUp = svgDocument.getElementById("rightSluiceUp");
var rightSluiceDown = svgDocument.getElementById("rightSluiceDown");
var leftGateOpen = svgDocument.getElementById("leftGateOpen");
var leftGateClose = svgDocument.getElementById("leftGateClose");
var rightGateOpen = svgDocument.getElementById("rightGateOpen");
var rightGateClose = svgDocument.getElementById("rightGateClose");
var left1 = svgDocument.getElementById("left1");
var right1 = svgDocument.getElementById("right1");
var left2 = svgDocument.getElementById("left2");
var right2 = svgDocument.getElementById("right2");
var left3 = svgDocument.getElementById("left3");
var right3 = svgDocument.getElementById("right3");
var left4 = svgDocument.getElementById("left4");
var right4 = svgDocument.getElementById("right4");
var left5 = svgDocument.getElementById("left5");
var right5 = svgDocument.getElementById("right5");
var speed = 50;
// Sluice functions:
function checkLeftSluiceOpen(evt){
  v = new getState();
  if ( v.a == 0 && v.b == 0 && v.c == 150 && v.d == 170 && v.e == 200 ) {
    closeLeftSluice(evt);
    displayMatrix(0.3,0.3,1,0.3,0.3,0.3,1,1,0.3,0.3);
  }
}
function closeLeftSluice(evt){
  x = leftSluice.getAttributeNS(null,"height");
  if ( x < 170 ) {
    x++;
    leftSluice.setAttributeNS(null, "height", x);
    setTimeout("closeLeftSluice(evt)", speed);
  }
}
function checkLeftSluiceClosed(evt){
  v = new getState();
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 200 ) {
    openLeftSluice(evt);
    displayMatrix(0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,1,0.3);
  }
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 150 ) {
    openLeftSluice(evt);
    raiseWater(evt);
    displayMatrix(0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,1,0.3);
  }
}
function openLeftSluice(evt){
  x = leftSluice.getAttributeNS(null,"height");
  if ( x > 150 ) {
    x--;
    leftSluice.setAttributeNS(null, "height", x);
    setTimeout("openLeftSluice(evt)", speed);
  }
}
function checkRightSluiceOpen(evt){
  v = new getState();
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 150 && v.e == 150 ) {
    closeRightSluice(evt);
    displayMatrix(0.3,0.3,0.3,1,0.3,0.3,1,1,0.3,0.3);
  }
}
function closeRightSluice(evt){
  x = rightSluice.getAttributeNS(null,"height");
  if ( x < 170 ) {
    x++;
    rightSluice.setAttributeNS(null, "height", x);
    setTimeout("closeRightSluice(evt)", speed);
  }
}
function checkRightSluiceClosed(evt){
  v = new getState();
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 200 ) {
    openRightSluice(evt);
    lowerWater(evt);
    displayMatrix(0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,1);
  }
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 150 ) {
    openRightSluice(evt);
    displayMatrix(0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,1);
  }
}
function openRightSluice(evt){
  x = rightSluice.getAttributeNS(null,"height");
  if ( x > 150 ) {
    x--;
    rightSluice.setAttributeNS(null, "height", x);
    setTimeout("openRightSluice(evt)", speed);
  }
}
// Helper functions:
function getState(){
  this.a = leftGate.getAttributeNS(null, "width");
  this.b = rightGate.getAttributeNS(null, "width");
  this.c = leftSluice.getAttributeNS(null, "height");
  this.d = rightSluice.getAttributeNS(null, "height");
  this.e = water.getAttributeNS(null, "height");
}
function displayMatrix(L1,R1,L2,R2,L3,R3,L4,R4,L5,R5){
  left1.setAttributeNS(null, "opacity", L1);
  right1.setAttributeNS(null, "opacity", R1);
  left2.setAttributeNS(null, "opacity", L2);
  right2.setAttributeNS(null, "opacity", R2);
  left3.setAttributeNS(null, "opacity", L3);
  right3.setAttributeNS(null, "opacity", R3);
  left4.setAttributeNS(null, "opacity", L4);
  right4.setAttributeNS(null, "opacity", R4);
  left5.setAttributeNS(null, "opacity", L5);
  right5.setAttributeNS(null, "opacity", R5);
}
// Gate functions:
function checkLeftGateOpen(evt){
  v = new getState();
  x = boat.getAttributeNS(null,"x");
  if ( v.a == 50 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 200 && x == 50 || x == 250 || x == 450  ) {
    closeLeftGate(evt);
    displayMatrix(0.3,0.3,1,0.3,0.3,0.3,1,1,0.3,0.3);
  }
}
function closeLeftGate(evt){
  x = leftGate.getAttributeNS(null,"width");
  if ( x > 0 ) {
    x--;
    leftGate.setAttributeNS(null, "width", x);
    setTimeout("closeLeftGate(evt)", speed);
  }
}
function checkLeftGateClosed(evt){
  v = new getState();
  var x = boat.getAttributeNS(null,"x");
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 200 ) {
    openLeftGate(evt);
    if ( x == 50 ) displayMatrix(0.3,1,0.3,0.3,1,0.3,0.3,0.3,0.3,0.3);
    if ( x == 250 ) displayMatrix(1,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3,0.3);
    if ( x == 450 ) displayMatrix(0.3,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3,0.3);
  }
}
function openLeftGate(evt){
  x = leftGate.getAttributeNS(null,"width");
  if ( x < 50 ) {
    x++;
    leftGate.setAttributeNS(null, "width", x);
    setTimeout("openLeftGate(evt)", speed);
  }
}
function checkRightGateOpen(evt){
  v = new getState();
  x = boat.getAttributeNS(null,"x");
  if ( v.a == 0 && v.b == 50 && v.c == 170 && v.d == 170 && v.e == 150 && x == 50 || x == 250 || x == 450 ) {
    closeRightGate(evt);
    displayMatrix(0.3,0.3,0.3,1,0.3,0.3,1,1,0.3,0.3);
  }
}
function closeRightGate(evt){
  x = rightGate.getAttributeNS(null,"width");
  if ( x > 0 ) {
    x--;
    rightGate.setAttributeNS(null, "width", x);
    setTimeout("closeRightGate(evt)", speed);
  }
}
function checkRightGateClosed(evt){
  v = new getState();
  var x = boat.getAttributeNS(null,"x");
  if ( v.a == 0 && v.b == 0 && v.c == 170 && v.d == 170 && v.e == 150 ) {
    openRightGate(evt);
    if ( x == 50 ) displayMatrix(0.3,0.3,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3);
    if ( x == 250 ) displayMatrix(0.3,1,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3);
    if ( x == 450 ) displayMatrix(1,0.3,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3);
  }
}
function openRightGate(evt){
  x = rightGate.getAttributeNS(null,"width");
  if ( x < 50 ) {
    x++;
    rightGate.setAttributeNS(null, "width", x);
    setTimeout("openRightGate(evt)", speed);
  }
}
// Water functions:
function raiseWater(evt){
  var x = water.getAttributeNS(null,"height");
  var y = water.getAttributeNS(null,"y");
  var z = boat.getAttributeNS(null,"x");
  if (z == 250){  
    if ( x < 200 ) {
      x++;
      y--;
      water.setAttributeNS(null, "y", y);
      water.setAttributeNS(null, "height", x);
      boat.setAttributeNS(null, "y", y-30);
      setTimeout("raiseWater(evt)", speed);
    }
  }
  else {  
    if ( x < 200 ) {
      x++;
      y--;
      water.setAttributeNS(null, "y", y);
      water.setAttributeNS(null, "height", x);
      setTimeout("raiseWater(evt)", speed);
    }
  }
}
function lowerWater(evt){
  var x = water.getAttributeNS(null,"height");
  var y = water.getAttributeNS(null,"y");
  var z = boat.getAttributeNS(null,"x");
  if (z == 250){
    if ( x > 150 ) {
      x--;
      y++;
      water.setAttributeNS(null, "y", y);
      water.setAttributeNS(null, "height", x);
      boat.setAttributeNS(null, "y", y-30);
      setTimeout("lowerWater(evt)", speed);
    }
  }
  else {
    if ( x > 150 ) {
      x--;
      y++;
      water.setAttributeNS(null, "y", y);
      water.setAttributeNS(null, "height", x);
      setTimeout("lowerWater(evt)", speed);
    }
  }
}
// Arrow functions:
function loseArrows(evt){
  leftSluiceUp.setAttributeNS(null, "display", "none");
  leftSluiceDown.setAttributeNS(null, "display", "none");
  rightSluiceUp.setAttributeNS(null, "display", "none");
  rightSluiceDown.setAttributeNS(null, "display", "none");
  leftGateOpen.setAttributeNS(null, "display", "none");
  leftGateClose.setAttributeNS(null, "display", "none");
  rightGateOpen.setAttributeNS(null, "display", "none");
  rightGateClose.setAttributeNS(null, "display", "none");
}
function displayLeftSluiceUpArrow(evt){
  if ( left4.getAttributeNS(null,"opacity") == 1 ){
    leftSluiceUp.setAttributeNS(null, "display", "inline");
  }
}
function displayLeftSluiceDownArrow(evt){
  if ( left5.getAttributeNS(null,"opacity") == 1 ){
    leftSluiceDown.setAttributeNS(null, "display", "inline");
  }
}
function displayRightSluiceUpArrow(evt){
  if ( right4.getAttributeNS(null,"opacity") == 1 ){
    rightSluiceUp.setAttributeNS(null, "display", "inline");
  }
}
function displayRightSluiceDownArrow(evt){
  if ( right5.getAttributeNS(null,"opacity") == 1 ){
    rightSluiceDown.setAttributeNS(null, "display", "inline");
  }
}
function displayLeftGateOpenArrow(evt){
  if ( left2.getAttributeNS(null,"opacity") == 1 ){
    leftGateOpen.setAttributeNS(null, "display", "inline");
  }
}
function displayLeftGateCloseArrow(evt){
  if ( left3.getAttributeNS(null,"opacity") == 1 ){
    leftGateClose.setAttributeNS(null, "display", "inline");
  }
}
function displayRightGateOpenArrow(evt){
  if ( right2.getAttributeNS(null,"opacity") == 1 ){
    rightGateOpen.setAttributeNS(null, "display", "inline");
  }
}
function displayRightGateCloseArrow(evt){
  if ( right3.getAttributeNS(null,"opacity") == 1 ){
    rightGateClose.setAttributeNS(null, "display", "inline");
  }
}
// Boat moving functions:
function checkBoatForMovingRight(evt){
  var x = boat.getAttributeNS(null,"x");
  if (x == 50) checkLeftGateAlreadyOpenForMovingRight(evt);
  if (x == 250) checkRightGateAlreadyOpenForMovingRight(evt);
}
function checkLeftGateAlreadyOpenForMovingRight(evt){
  a = leftGate.getAttributeNS(null,"width");
  if ( a == 50 ) {
    moveBoatToMiddleFromLeft(evt);
    displayMatrix(1,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3,0.3);
  }
}
function moveBoatToMiddleFromLeft(evt){
  var x = boat.getAttributeNS(null,"x");
  if (x < 250){
    x++;
    boat.setAttributeNS(null, "x", x);
    setTimeout("moveBoatToMiddleFromLeft(evt)", speed);
  }
}
function checkRightGateAlreadyOpenForMovingRight(evt){
  a = rightGate.getAttributeNS(null,"width");
  if ( a == 50 ) {
    moveBoatToRightFromMiddle(evt);
    displayMatrix(1,0.3,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3);
  }
}
function moveBoatToRightFromMiddle(evt){
  var x = boat.getAttributeNS(null,"x");
  if (x < 450){
    x++;
    boat.setAttributeNS(null, "x", x);
    setTimeout("moveBoatToRightFromMiddle(evt)", speed);
  }
}
function checkBoatForMovingLeft(evt){
  var x = boat.getAttributeNS(null,"x");
  if (x == 450) checkRightGateAlreadyOpenForMovingLeft(evt);
  if (x == 250) checkLeftGateAlreadyOpenForMovingLeft(evt);
}
function checkLeftGateAlreadyOpenForMovingLeft(evt){
  a = leftGate.getAttributeNS(null,"width");
  if ( a == 50 ) {
    moveBoatToLeftFromMiddle(evt);
    displayMatrix(0.3,1,0.3,0.3,1,0.3,0.3,0.3,0.3,0.3);
  }
}
function moveBoatToLeftFromMiddle(evt){
  var x = boat.getAttributeNS(null,"x");
  if (x > 50){
    x--;
    boat.setAttributeNS(null, "x", x);
    setTimeout("moveBoatToLeftFromMiddle(evt)", speed);
  }
}
function checkRightGateAlreadyOpenForMovingLeft(evt){
  a = rightGate.getAttributeNS(null,"width");
  if ( a == 50 ) {
    moveBoatToMiddleFromRight(evt);
    displayMatrix(0.3,1,0.3,0.3,0.3,1,0.3,0.3,0.3,0.3);
  }
}
function moveBoatToMiddleFromRight(evt){
  var x = boat.getAttributeNS(null,"x");
  if (x > 250){
    x--;
    boat.setAttributeNS(null, "x", x);
    setTimeout("moveBoatToMiddleFromRight(evt)", speed);
  }
}
