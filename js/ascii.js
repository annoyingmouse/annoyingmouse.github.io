var cpt = 0;
var time = 0;
var t = new Array();

function init(c, n, vert, backgroundPlus){
  for(i=0; i<n; i++){
    cpt++;
    if(backgroundPlus)
      document.write("<a class=\"croix\" id=\"L" +  cpt + "\" onMouseOver=\"javascript:setMoving(this,\'"+c+"\');\" >" + c + "</a>");
    else
      document.write("<a class=\"bordtableau\" id=\"L" +  cpt + "\" onMouseOver=\"javascript:setMoving(this,\'"+c+"\');\" >" + c + "</a>");
    if(vert) document.write('<br>');
  }
}

function changer(la, c){
  if(time > 20){
    retablir(la.id, c);
    return;
  }
  if(la.innerHTML == '-') la.innerHTML='\\';
  else if(la.innerHTML == '.') la.innerHTML='-';
  else if(la.innerHTML == '\\') la.innerHTML='|';
  else if(la.innerHTML == '|') la.innerHTML='/';
  else if(la.innerHTML == '/') la.innerHTML='-';
  else if(la.innerHTML == '-') la.innerHTML='\\';
  else if(la.innerHTML == '@') la.innerHTML='-';
  else if(la.innerHTML == '!') la.innerHTML='-';
  else if(la.innerHTML == ':') la.innerHTML='-';
  time++;
  t[la.id] = window.setTimeout('changer(document.getElementById("'+la.id+'"),\"'+c+'\")', 50);
}

function setMoving(la, c){
  moving = true;
  time = 0;
  t[la.id] = window.setTimeout('changer(document.getElementById("'+la.id+'"),\"'+c+'\")', 10);
}

function retablir(id, c){
  time = 0;
  window.clearTimeout(t[id]);
  moving = false;
  la = document.getElementById(id);
  la.innerHTML=c;
}

