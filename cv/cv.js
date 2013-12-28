// http://www.random.abrahamjoffe.com.au/public/JavaScripts/canvas/fonts.htm
var HeloniaNeue12 = new Image();
HeloniaNeue12.src = 'data:image/png;base64,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'; // paste your data url string here
HeloniaNeue12.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~';
HeloniaNeue12.w = [9, 9, 9, 9, 9, 5, 9, 9, 4, 4, 8, 4, 14, 9, 9, 9, 9, 5, 8, 5, 9, 8, 12, 8, 8, 8, 10, 11, 12, 11, 10, 9, 12, 12, 4, 8, 11, 9, 14, 12, 12, 10, 12, 11, 10, 9, 12, 10, 15, 10, 10, 10, 4, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4, 13, 9, 9, 16, 10, 10, 6, 4, 4, 6, 10, 4, 4, 5, 4, 4, 4, 4, 5, 8, 10, 5, 5, 4, 4, 7, 10, 10, 9, 4, 10];
HeloniaNeue12.h = 20;

var HeloniaNeueExtrabold22 = new Image();
HeloniaNeueExtrabold22.src = 'data:image/png;base64,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'; // paste your data url string here
HeloniaNeueExtrabold22.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~';
HeloniaNeueExtrabold22.w = [17, 18, 17, 18, 18, 11, 18, 18, 9, 9, 17, 9, 27, 18, 18, 18, 18, 12, 16, 11, 18, 16, 24, 16, 16, 16, 20, 21, 22, 22, 20, 18, 23, 21, 9, 17, 21, 18, 27, 21, 23, 20, 23, 21, 19, 19, 21, 19, 28, 20, 19, 19, 9, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 23, 18, 18, 30, 17, 21, 13, 9, 9, 12, 17, 11, 11, 12, 9, 9, 9, 9, 12, 15, 17, 11, 11, 6, 9, 15, 17, 17, 17, 9, 17];
HeloniaNeueExtrabold22.h = 35;

var Bavaria8 = new Image();
Bavaria8.src = "Bavaria8.png";
Bavaria8.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~';
Bavaria8.w = [6,6,6,6,6,3,6,6,2,4,5,3,8,6,6,6,6,5,6,4,6,6,8,6,6,5,6,6,6,6,5,5,6,6,4,6,6,5,8,6,6,6,6,6,6,6,6,6,8,6,6,6,3,5,4,5,5,6,5,5,5,5,5,2,9,6,6,8,6,6,6,3,3,4,4,4,4,8,3,2,3,2,8,5,4,4,4,2,2,4,4,4,5,4,4];
Bavaria8.h = 10;

var Bavaria16 = new Image();
Bavaria16.src = "Bavaria16.png";
Bavaria16.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~';
Bavaria16.w = [12,12,12,12,12,6,12,12,4,8,10,6,16,12,12,12,12,10,12,8,12,12,16,12,12,10,12,12,12,12,10,10,12,12,8,12,12,10,16,12,12,12,12,12,12,12,12,12,16,12,12,12,6,10,8,10,10,12,10,10,10,10,10,4,18,12,12,16,12,12,12,6,6,8,8,8,8,16,6,4,6,4,16,10,8,8,8,4,4,8,8,8,10,8,8];
Bavaria16.h = 20;

var Everyday10 = new Image();
Everyday10.src = "Everyday10.png";
Everyday10.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~';
Everyday10.w = [6,6,5,6,6,6,6,6,3,5,7,3,9,6,6,6,6,5,5,5,6,7,9,7,7,6,9,6,7,7,6,6,7,7,3,5,8,6,9,8,8,6,8,7,6,7,7,9,11,7,7,6,4,6,5,6,6,7,7,6,6,6,6,3,10,9,7,9,7,7,7,4,4,7,7,4,4,5,4,3,4,3,5,7,9,5,5,3,3,5,8,8,6,3,8];
Everyday10.h = 11;

var Dominic = new Image();
Dominic.src = "Dominic.png";
//Dominic.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAAANCAQAAAERoG7kAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QMUFAYfOtK+lgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADcklEQVRo3u1a25IrIQiEVP7/l3sfNvGCDaLJTHL2jFXZtUYHkMHmoirPBlHxG5znWkZU0Pyk/H3O0cLBcLqJCB5TRoYofS2Mnn+1E0SbuUxgdfpLDQ9h8WBQ+2hGWxHg9AzVWzelkuCkhXy2qn6rQ3X1QJ62jNAJI81a+1lMTxi01eqNLVEMN06113v7ri8PUjaNVeOXjQ3zTzSlBjbDCW8EHU5IQQFukBY96rvaAME4KzLvdvYM6cr4jW4FDCYOOsptQQtu/ZqrNmiGJC11l6qFg9CtZpXYj1A13if2ocYL1H6L//2XxABcvyMgHNDBfr94uGKjUWtk06AqXNjf+H8wYbYofA14jr4JxLnC8T0wHsvb4jA0Rtdt18FmyODFPHgB9Xo85shqFVRzk3ZzltZjzuufFDSkeJ/BrjrCFsieyI0hGNYJjYiLDlzGUZ+mdqiuIT8kXfqBeHG1P+sKxN25ONkcrCuIYzYv8oJBttg5ZHFqpCiLkSaLTTGgcySPLy/ChG7iMrBhKjjFDPAl+IMg9D6eth+bZL8ZnM2NGiOMoRcLubggcPeukPDMC8RsAMWSD7bndg0liyVi6lbZWGEHu+ozTZRVMsWRUVM1IkLRrfZUGXAg2J3xp+QAKE4E7v++FRH2gmi8QPsYRDBZA4p9KFW90qotnAhWO1p2uW15oNZF0fV7oXupZt555l/j93n/WQVXWlyNMaodVTrfzlUqiQZIARcvtKMCg23Y2w87c3Eon6t9NKfAAiDhMoO/lkbOApOsLzwv9TyWsl9t9GqQsz6mY0i9C3Ket9qP6fN+ZlymPDCl6ZU0vGez6NQmStbNgtax40pyrhYM2T8vjXUYR5F8dokVzwKYC/Vf1WO2cqyHarvNPL1x8MxU5vVvHeJcGyXnKeRq7d5Nj3pe3B6HVmk0ODPw8v6Rl5InQuVZd3v9KUX9z++oNOUkcYtFGY82928ziNj1Y0gAzopv8/H/KEA7ctvmRzCkp3ijHGpuI7wKguobs/mS+QND764CpnJnkvvX4BsiBxwiQpwj2PsBJveZplO/oNP6ra8+/fB6Vd5/uoxN2hrO9q4ErUqPhK9ffc7sha9+vCDHr9dpcl26qVEsQXtmrdG7B9g4NkZ26Z6RhFyJztXOTAvjaBfhVbG3tPv1Ha52ta+KcU/032P7Aa15Mfp7G9TQAAAAAElFTkSuQmCC";
Dominic.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~\t';
Dominic.w = [7,6,5,6,6,5,6,6,2,5,5,2,10,6,6,6,6,5,6,5,6,6,10,6,6,6,6,6,5,6,6,6,6,6,6,6,6,6,10,6,6,6,6,6,6,6,6,6,10,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2,6,6,6,6,6,6,5,3,3,6,6,3,3,6,3,2,3,2,6,6,6,4,4,2,2,4,4,4,6,4,5,1];
Dominic.h = 13;
Dominic.s = 6;

var DominicBig = new Image();
DominicBig.src = "DominicBig.png";
//DominicBig.src = "data:image/png;base64,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";
DominicBig.c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()-=[]\\;\',./_+{}|:"<>?`~';
DominicBig.w = [14,12,10,12,12,10,12,12,4,10,10,4,20,12,12,12,12,10,12,10,12,12,20,12,12,12,12,12,10,12,12,12,12,12,12,12,12,12,20,12,12,12,12,12,12,12,12,12,20,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,12,12,12,12,12,12,10,6,6,12,12,6,6,12,6,4,6,4,12,12,12,8,8,4,4,8,8,8,12,8,10];
DominicBig.h = 26;


CanvasRenderingContext2D.prototype.drawString = function (s, f, x, y) {
    y = Math.round(y);
    var z = x = Math.round(x);
    var t;
    var i;
    var j;
    if (!f.f) {
        f.f = [t = 0];
        var i = 0;
        var j = f.w.length;
        while (++i < j){
            f.f[i] = t += f.w[i - 1];
        }
    }
    s = s.split('')
    var i = 0;
    var j = s.length;
    while (i < j) {
        if ((t = f.c.indexOf(s[i++])) >= 0){
            this.drawImage(f, f.f[t], 0, f.w[t], f.height, x, y, f.w[t], f.height);
            x += f.w[t];
        }else if(s[i - 1] == '\t'){

            this.drawImage(f, f.f[t], 0, f.w[t], f.height, x, y, f.w[t], f.height);
            x += f.w[t];

        }else if (s[i - 1] == '\n'){
            x = z;
            y += f.h;
        }
    }
}

function splitParagraphIntoLines(paragraph, length, typeFace){
    var lines = [];
    var words = paragraph.split(" ");
    var line = "";
    var lineLength = 0;
    var spaceLength = typeFace.s;
    while(words.length > 0){
        var wordToTest = words[0];
        var wordLength = getLengthOfWord(wordToTest, typeFace);
        if(line == ""){
            if((lineLength + wordLength) < length){
                lineLength = lineLength + wordLength;
                line = wordToTest;
                words.splice(0, 1);
                if(words.length == 0){
                    var tempObjects = {};
                    tempObjects.lineLength = lineLength;
                    tempObjects.line = line;
                    lines.push(tempObjects);
                }
            }else{
                var tempObjects = {};
                tempObjects.lineLength = lineLength;
                tempObjects.line = line;
                lines.push(tempObjects);
                line = "";
                lineLength = 0;
            }
        }else{
            if((lineLength + wordLength + spaceLength) < length){
                lineLength = lineLength + wordLength + spaceLength;
                line = line + " " + wordToTest;
                words.splice(0, 1);
                if(words.length == 0){
                    var tempObjects = {};
                    tempObjects.lineLength = lineLength;
                    tempObjects.line = line;
                    lines.push(tempObjects);
                }
            }else{
                var tempObjects = {};
                tempObjects.lineLength = lineLength;
                tempObjects.line = line;
                lines.push(tempObjects);
                line = "";
                lineLength = 0;
            }
        }
    }
    var l = [];
    $.each(lines, function(k, v){
        if(k != (lines.length - 1)){
            if(v.lineLength < length){
                var extraSpaces = length - v.lineLength;
                var words = v.line.split(" ");
                var newSpaces = Math.round(extraSpaces/(words.length-1));
                var newString = "";
                for(var i = 0; i < newSpaces; i++){
                    newString += '\t';
                }
                l.push(words.join(" " + newString));
            }
        }else{
            l.push(v.line);
        }
    });
    return l;
}

function getLengthOfWord(word, typeFace){
    var letters = word.split('')
    var length = 0;
    var j = letters.length;
    for(var i = 0; i < letters.length; i++){
        var letterPlace = typeFace.c.indexOf(letters[i]);
        length += typeFace.w[letterPlace];
    }
    return length;
}

function getLengthOfSpace(typeFace){
    return typeFace.w[typeFace.c.indexOf(" ")];
}

function empty(data) {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
        return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) != 'undefined') {
        return data.length == 0;
    }
    var count = 0;
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count == 0;
}


CanvasRenderingContext2D.prototype.drawStringBounded =  function (ctx, s, f, x, y, width, lineHeight){
    var lines = splitParagraphIntoLines(s, width, f);
    $.each(lines, function(k, v){
        ctx.drawString(v, f, x, y);
        y = y+lineHeight;
    });
    return y;
}

var lineHeight = 14;
var indent = 20;
var tab1 = 120;
var tab2 = 845;
var blockWidth = 780;


var currentY = 15;
$(function(){
    var ctx = document.getElementById('canvas').getContext('2d');
    $.getJSON("./cv.json", function(cv) {
        $.each(cv["details"], function(k, v){
            ctx.drawString(v.line, Dominic, indent, currentY);
            currentY = currentY+lineHeight;
        });
        currentY = currentY+5;
        ctx.drawString('Education, qualifications and training', DominicBig, 10, currentY);
        currentY = currentY+35;
        $.each(cv["Education, qualifications and training"], function(k, v){
            ctx.drawString(v.when, Dominic, indent, currentY);
            ctx.drawString(v.where, Dominic, tab1, currentY);
            currentY = currentY+lineHeight;
            $.each(v["what"], function(a, b){
                ctx.drawString(b.subject, Dominic, tab1, currentY);
                if(!empty(b.grade)){
                    ctx.drawString(b.grade, Dominic, tab2, currentY);
                }
                currentY = currentY+lineHeight;
            });
            currentY = currentY+5;
        });
        ctx.drawString('Experiences/achievements', DominicBig, 10, currentY);
        currentY = currentY+35;
        $.each(cv["Experiences/achievements"], function(k, v){
            ctx.drawString(v.when, Dominic, indent, currentY);
            currentY = ctx.drawStringBounded(ctx, v.what, Dominic, tab1, currentY, blockWidth, lineHeight);
            currentY = currentY+5;
        });
    });
});

