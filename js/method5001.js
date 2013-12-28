// Method-5 animation script (compressed)
/* **** user defined animation settings **** */
var     max_pics=10;   // set this value to the total number of pictures in film
var     top='50%';     // set this value to position animation top
var     left='50%';    // set this value to position animation left
var     delay=200;     // set this default delay after each picture
var     wait=false;    // set this to pause after each loop (true/false)
var     name='t';      // set this to the animation's DIV ID prefix
/* **** animation runtime module **** */ /* speed optim */ /* Method-5 v1.2a */
var dhtml=true;
var posi=0,prev=1,run=true;
with(document){ write('<'+'style type="text/css">');
for(i=0;i<=max_pics;i++)
  write("#"+name+i+"{position:absolute;left:"+left+";top:"+top+";z-index:"+i+";visibility:hidden;margin-top:-13em;margin-left:-5em;}");
  write("<\/style>");}
if(document.layers) var doc='document.',vis='.visibility';
else if(document.all) var doc='document.all.',vis='.style.visibility';
else if(document.getElementById) var doc='document.getElementById(\"',vis='\").style.visibility';
else dhtml=false;
function tick(){
  if(++posi>max_pics) posi=1;
  eval(doc+'t'+prev+vis+'="hidden"');
  eval(doc+'t'+posi+vis+'="visible"');
  prev=posi;
  if(run){
    if(wait){
      if(posi==max_pics||posi==1){
        setTimeout("tick()",delay*5)
      }
      else setTimeout("tick()",delay)
    }
    else setTimeout("tick()",delay)
  }
}
