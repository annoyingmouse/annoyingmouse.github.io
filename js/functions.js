$(function(){
    $.each(links, function(k,v){
        if (v.url instanceof Array) {
            var dropdown = $("<li></li>", {
                "class": "dropdown"
            }).appendTo($("#siteLinks"));
            dropdown.append($("<a></a>", {
                "class": "dropdown-toggle",
                "data-toggle": "dropdown",
                "href": "#",
                "text": v.text
            }).append($("<b></b>", {
                "class": "carat"
            })));
            var dropdownMenu = $("<ul></ul>", {
                "class": "dropdown-menu"
            }).appendTo(dropdown);
            $.each(v.url, function(a, b){
                dropdownMenu.append($("<li></li>").append($("<a></a>", {
                    "href": (b.url.indexOf("http") == -1) ? base + b.url : b.url,
                    "text": b.text
                })));
            });
        } else {
            $("#siteLinks").append($("<li></li>").append($("<a></a>",{
                "href": (v.url.indexOf("http") == -1) ? base + v.url : v.url,
                "text": v.text
            })));
        }
    });
    $("#siteLinks").find("li").each(function(k,v){
        if ($(v).find("a").attr("href") == document.location.href.toString()) {
            $(v).addClass("active");
        }
    });
});

function getDir(){
    var path = document.location.pathname;
    return path.substring(path.indexOf('/', 1)+1, path.lastIndexOf('/'));
}

function empty(data) {
    if (typeof(data) == 'number' || typeof(data) == 'boolean') {
        return false;
    }
    if (typeof(data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof(data.length) != 'undefined') {
        return data.length == 0;
    }
    var count = 0;
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            count ++;
        }
    }
    return count == 0;
}

function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
// FROM: http://stackoverflow.com/questions/498970/how-do-i-trim-a-string-in-javascript
if (!String.prototype.trim) {
    String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
}
String.prototype.ltrim=function(){
    return this.replace(/^\s+/,'');
};
String.prototype.rtrim=function(){
    return this.replace(/\s+$/,'');
};
String.prototype.fulltrim=function(){
    return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
};
// FROM: http://jspro.com/raw-javascript/five-php-functions-id-love-to-see-in-javascript/
String.prototype.htmlSpecialChars = function(){
    return this
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
};
String.prototype.htmlSpecialCharsDecode = function(){
    return this
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"');
};
String.prototype.ucwords = function() {
    var words = this.split(/(\s+)/);
    for(var i = 0; i < words.length; i++)
        words[i] = words[i][0].toUpperCase() + words[i].substr(1, words[i].length);
    return words.join('');
};
String.prototype.ucfirst = function() {
    var words = this.split(/(\s+)/);
    if (words[0] != null)
        words[0] = words[0][0].toUpperCase() + words[0].substr(1, words[0].length);
    return words.join('');
};
Array.prototype.unique = function (sort, sortingFunction) {
    var array = [];
    for (var i = 0; i < this.length; i++) {
        if (array.inArray(this[i]) === false)
            array.push(this[i]);
    }
    if (sort === true) {
        if (typeof sortingFunction === 'function')
            array.sort(sortingFunction);
        else
            array.sort();
    }
    return array;
};
// FROM: http://www.sitepoint.com/finding-an-ancestor-node/
function ancestor(node, match){
    if(!node)    {
        return null;
    }else if(!node.nodeType || typeof(match) != 'string'){
        return node;
    }
    if((match = match.split('.')).length === 1){
        match.push(null);
    }else if(!match[0]){
        match[0] = null;
    }
    do{
        if( (!match[0] || match[0].toLowerCase() == node.nodeName.toLowerCase()) && (!match[1] || new RegExp('( |^)(' + match[1] + ')( |$)').test(node.className))){
            break;
        }
    }
    while(node = node.parentNode);
    return node;
}
/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
var Base64 = {
    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64._utf8_decode(output);
        return output;
    },
    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
function abbreviate(str, max, suffix){
    if((str = str.replace(/^\s+|\s+$/g, '').replace(/[\r\n]*\s*[\r\n]+/g, ' ').replace(/[ \t]+/g, ' ')).length <= max){
        return str;
    }
    var abbr = '',
        str = str.split(' '),
        suffix = (typeof suffix !== 'undefined' ? suffix : ' ...'),
        max = (max - suffix.length);
    for(var len = str.length, i = 0; i < len; i ++){
        if((abbr + str[i]).length < max){
            abbr += str[i] + ' ';
        } else {
            break;
        }
    }
    return abbr.replace(/[ ]$/g, '') + suffix;
}
/**
 * ReplaceAll by Fagner Brack (MIT Licensed)
 * Replaces all occurrences of a substring in a string
 */
String.prototype.replaceAll = function (token, newToken, ignoreCase) {
    var _token;
    var str = this + "";
    var i = -1;
    if (typeof token === "string") {
        if (ignoreCase) {
            _token = token.toLowerCase();
            while ((
                i = str.toLowerCase().indexOf(
                    token, i >= 0 ? i + newToken.length : 0
                )) !== -1
                ) {
                str = str.substring(0, i) +
                    newToken +
                    str.substring(i + token.length);
            }
        } else {
            return this.split(token).join(newToken);
        }
    }
    return str;
};

/**
 * From: http://www.sitepoint.com/using-web-storage/
 */
function domStorage(persist){
    try{
        var storage = window[persist ? 'localStorage' : 'sessionStorage'];
        if(!storage) { return null; }
    }catch(ex) { return null; }
    return {
        read : function(key){
            return storage.getItem(key);
        }, write : function(key, value){
            try{
                return storage[key] = value.toString();
            }catch(ex) { return null; }
        }, erase : function(key){
            storage.removeItem(key);
            return true;
        }, keys : function(){
            for(var keys = [], n = storage.length, i = 0; i < n; i ++){
                keys.push(storage.key(i));
            }
            return keys;
        }, clear : function(){
            try{
                storage.clear();
                return true;
            }catch(ex) { return false; }
        }
    };
}


