// Melt code by Glen Murphy
// Author home: http://glenmurphy.com/
// Melt home:   http://bodytag.org/melt/

var bt_root = document.getElementsByTagName('body').item(0);
bt_root.style.visibility = 'hidden';

var bt_nodes = new Array();
var bt_text = new Array();
var bt_tumble = new Array();
var bt_maxsize = 0;
var bt_count = 0;

function Is(){ 
  this.ver=navigator.appVersion;
  this.agent=navigator.userAgent;
  this.dom=document.getElementById?1:0;
  this.opera5=this.agent.indexOf("Opera 5")>-1;
  this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0; 
  this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;
  this.ie4=(document.all && !this.dom && !this.opera5)?1:0;
  this.ie=this.ie4||this.ie5||this.ie6;
  this.mac=this.agent.indexOf("Mac")>-1;
  this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0; 
  this.ns4=(document.layers && !this.dom)?1:0;
  this.bw=(this.ie6||this.ie5||this.ie4||this.ns4||this.ns6||this.opera5);
  return this;
	}

var is = new Is();

function bt_spin() {
	if(is.dom && !(is.mac && is.ie)) bt_godeep(bt_root);
	bt_root.style.visibility = 'visible';
	if(is.dom && !(is.mac && is.ie)) bt_sponge();
	}

function bt_finished() {
	bt_nodes = null;
	bt_text = null;
	bt_tumble = null;
	}

var bt_chartype = Math.floor(Math.random()*2);

function digit() {
	if(bt_chartype == 0)
		return Math.floor(Math.random()*2);
	else if(bt_chartype == 1)
		return '_';
	else
		return '_';
	}

var reg = new RegExp ("\r|\n", "g");
function bt_haschars(s) {
	s = s.replace(reg,'');
	return s.length;
	}
	
function bt_godeep(o) {
	for (var i = 0; i < o.childNodes.length; i++) {
		if(o.childNodes[i].childNodes) {
			bt_godeep(o.childNodes[i]);
			}
	  if(o.childNodes[i].nodeName == '#text' && bt_haschars(o.childNodes[i].nodeValue)) {
	  	var p = bt_nodes.length;
			bt_nodes[p] = o.childNodes[i];
			bt_text[p] = o.childNodes[i].nodeValue;
			bt_tumble[p] = new Array();
			for(var u = 0; u < o.childNodes[i].nodeValue.length; u++) {
				bt_tumble[p][u] = u;
				}
			if(o.childNodes[i].nodeValue.length > bt_maxsize) {
				bt_maxsize = o.childNodes[i].nodeValue.length;
				}
			bt_tumble[p].sort(randomSort);
			o.childNodes[i].nodeValue = '';
			}
		}
	}

function randomSort(w1,w2) {
	return Math.floor(Math.random()*3)-1;
	}

function bt_sponge() {
	for (var i = 0; i < bt_nodes.length; i++) {
		if(bt_count < bt_tumble[i].length) {
    	bt_nodes[i].nodeValue += (bt_text[i].charAt(bt_count) == ' ') ? ' ':digit(1);
    	}
    }
 	bt_count++;
 	if(bt_count < bt_maxsize) {
  	setTimeout('bt_sponge()',20);
  	}
 	else {
 		bt_count = 0;
  	setTimeout('bt_unsponge()',350);
  	}
	}

function bt_repchar(str, ch, pos) {
	var out = '';
	for(var i = 0; i < str.length; i++) {
		if(i == pos) out += ch;
		else out += str.charAt(i);
		}
	return out;
	}

function bt_unsponge() {
	for (var i = 0; i < bt_nodes.length; i++) {
		if(bt_count <= bt_tumble[i].length) {
    	bt_nodes[i].nodeValue = bt_repchar(bt_nodes[i].nodeValue, bt_text[i].charAt(bt_tumble[i][bt_count]), bt_tumble[i][bt_count]);
    	}
		}
  bt_count++;
  if(bt_count < 10) setTimeout('bt_unsponge()',30);
	else if(bt_count < bt_maxsize) setTimeout('bt_unsponge()',5);
	else bt_finished();
	}
	
window.onload = bt_spin;