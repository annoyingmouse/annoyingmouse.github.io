var hljs = new (function () {
  function l(o) {
    return o
      .replace(/&/gm, "&amp;")
      .replace(/</gm, "&lt;")
      .replace(/>/gm, "&gt;");
  }
  function b(p) {
    for (var o = p.firstChild; o; o = o.nextSibling) {
      if (o.nodeName.toUpperCase() == "CODE") {
        return o;
      }
      if (!(o.nodeType == 3 && o.nodeValue.match(/\s+/))) {
        break;
      }
    }
  }
  function h(p, o) {
    return Array.prototype.map
      .call(p.childNodes, function (q) {
        if (q.nodeType == 3) {
          return o ? q.nodeValue.replace(/\n/g, "") : q.nodeValue;
        }
        if (q.nodeName.toUpperCase() == "BR") {
          return "\n";
        }
        return h(q, o);
      })
      .join("");
  }
  function a(q) {
    var p = (
      q.className +
      " " +
      (q.parentNode ? q.parentNode.className : "")
    ).split(/\s+/);
    p = p.map(function (r) {
      return r.replace(/^language-/, "");
    });
    for (var o = 0; o < p.length; o++) {
      if (e[p[o]] || p[o] == "no-highlight") {
        return p[o];
      }
    }
  }
  function c(q) {
    var o = [];
    (function p(r, s) {
      for (var t = r.firstChild; t; t = t.nextSibling) {
        if (t.nodeType == 3) {
          s += t.nodeValue.length;
        } else {
          if (t.nodeName.toUpperCase() == "BR") {
            s += 1;
          } else {
            if (t.nodeType == 1) {
              o.push({ event: "start", offset: s, node: t });
              s = p(t, s);
              o.push({ event: "stop", offset: s, node: t });
            }
          }
        }
      }
      return s;
    })(q, 0);
    return o;
  }
  function j(p, r, v) {
    var q = 0;
    var y = "";
    var s = [];
    function u() {
      if (!p.length || !r.length) {
        return p.length ? p : r;
      }
      if (p[0].offset != r[0].offset) {
        return p[0].offset < r[0].offset ? p : r;
      }
      return r[0].event == "start" ? p : r;
    }
    function t(A) {
      function z(B) {
        return " " + B.nodeName + '="' + l(B.value) + '"';
      }
      y +=
        "<" +
        A.nodeName.toLowerCase() +
        Array.prototype.map.call(A.attributes, z).join("") +
        ">";
    }
    function x(z) {
      y += "</" + z.nodeName.toLowerCase() + ">";
    }
    function o(z) {
      (z.event == "start" ? t : x)(z.node);
    }
    while (p.length || r.length) {
      var w = u();
      y += l(v.substr(q, w[0].offset - q));
      q = w[0].offset;
      if (w == p) {
        s.reverse().forEach(x);
        do {
          o(w.splice(0, 1)[0]);
          w = u();
        } while (w == p && w.length && w[0].offset == q);
        s.reverse().forEach(t);
      } else {
        if (w[0].event == "start") {
          s.push(w[0].node);
        } else {
          s.pop();
        }
        o(w.splice(0, 1)[0]);
      }
    }
    return y + l(v.substr(q));
  }
  function f(r) {
    function o(s) {
      return (s && s.source) || s;
    }
    function p(t, s) {
      return RegExp(o(t), "m" + (r.cI ? "i" : "") + (s ? "g" : ""));
    }
    function q(z, x) {
      if (z.compiled) {
        return;
      }
      z.compiled = true;
      var u = [];
      if (z.k) {
        var s = {};
        function A(B, t) {
          if (r.cI) {
            t = t.toLowerCase();
          }
          t.split(" ").forEach(function (C) {
            var D = C.split("|");
            s[D[0]] = [B, D[1] ? Number(D[1]) : 1];
            u.push(D[0]);
          });
        }
        z.lR = p(z.l || "\\b" + hljs.IR + "\\b(?!\\.)", true);
        if (typeof z.k == "string") {
          A("keyword", z.k);
        } else {
          for (var y in z.k) {
            if (!z.k.hasOwnProperty(y)) {
              continue;
            }
            A(y, z.k[y]);
          }
        }
        z.k = s;
      }
      if (x) {
        if (z.bWK) {
          z.b = "\\b(" + u.join("|") + ")\\b(?!\\.)\\s*";
        }
        z.bR = p(z.b ? z.b : "\\B|\\b");
        if (!z.e && !z.eW) {
          z.e = "\\B|\\b";
        }
        if (z.e) {
          z.eR = p(z.e);
        }
        z.tE = o(z.e) || "";
        if (z.eW && x.tE) {
          z.tE += (z.e ? "|" : "") + x.tE;
        }
      }
      if (z.i) {
        z.iR = p(z.i);
      }
      if (z.r === undefined) {
        z.r = 1;
      }
      if (!z.c) {
        z.c = [];
      }
      for (var w = 0; w < z.c.length; w++) {
        if (z.c[w] == "self") {
          z.c[w] = z;
        }
        q(z.c[w], z);
      }
      if (z.starts) {
        q(z.starts, x);
      }
      var v = [];
      for (var w = 0; w < z.c.length; w++) {
        v.push(o(z.c[w].b));
      }
      if (z.tE) {
        v.push(o(z.tE));
      }
      if (z.i) {
        v.push(o(z.i));
      }
      z.t = v.length
        ? p(v.join("|"), true)
        : {
            exec: function (t) {
              return null;
            },
          };
    }
    q(r);
  }
  function d(E, G, C, M) {
    function o(r, P) {
      for (var O = 0; O < P.c.length; O++) {
        var N = P.c[O].bR.exec(r);
        if (N && N.index == 0) {
          return P.c[O];
        }
      }
    }
    function s(N, r) {
      if (N.e && N.eR.test(r)) {
        return N;
      }
      if (N.eW) {
        return s(N.parent, r);
      }
    }
    function t(r, N) {
      return !C && N.i && N.iR.test(r);
    }
    function y(O, r) {
      var N = H.cI ? r[0].toLowerCase() : r[0];
      return O.k.hasOwnProperty(N) && O.k[N];
    }
    function I() {
      var N = l(w);
      if (!B.k) {
        return N;
      }
      var r = "";
      var Q = 0;
      B.lR.lastIndex = 0;
      var O = B.lR.exec(N);
      while (O) {
        r += N.substr(Q, O.index - Q);
        var P = y(B, O);
        if (P) {
          v += P[1];
          r += '<span class="' + P[0] + '">' + O[0] + "</span>";
        } else {
          r += O[0];
        }
        Q = B.lR.lastIndex;
        O = B.lR.exec(N);
      }
      return r + N.substr(Q);
    }
    function z() {
      if (B.sL && !e[B.sL]) {
        return l(w);
      }
      var N = B.subLanguageMode == "continuous" ? B.top : undefined;
      var r = B.sL ? d(B.sL, w, true, N) : g(w);
      if (B.r > 0) {
        v += r.keyword_count;
        A += r.r;
      }
      B.top = r.top;
      return '<span class="' + r.language + '">' + r.value + "</span>";
    }
    function L() {
      return B.sL !== undefined ? z() : I();
    }
    function K(O, r) {
      var N = O.cN ? '<span class="' + O.cN + '">' : "";
      if (O.rB) {
        x += N;
        w = "";
      } else {
        if (O.eB) {
          x += l(r) + N;
          w = "";
        } else {
          x += N;
          w = r;
        }
      }
      B = Object.create(O, { parent: { value: B } });
    }
    function D(N, r) {
      w += N;
      if (r === undefined) {
        x += L();
        return 0;
      }
      var P = o(r, B);
      if (P) {
        x += L();
        K(P, r);
        return P.rB ? 0 : r.length;
      }
      var Q = s(B, r);
      if (Q) {
        var O = B;
        if (!(O.rE || O.eE)) {
          w += r;
        }
        x += L();
        do {
          if (B.cN) {
            x += "</span>";
          }
          A += B.r;
          B = B.parent;
        } while (B != Q.parent);
        if (O.eE) {
          x += l(r);
        }
        w = "";
        if (Q.starts) {
          K(Q.starts, "");
        }
        return O.rE ? 0 : r.length;
      }
      if (t(r, B)) {
        throw new Error(
          'Illegal lexem "' + r + '" for mode "' + (B.cN || "<unnamed>") + '"',
        );
      }
      w += r;
      return r.length || 1;
    }
    var H = e[E];
    if (!H) {
      throw new Error('Unknown language: "' + E + '"');
    }
    f(H);
    var B = M || H;
    var x = "";
    for (var F = B; F != H; F = F.parent) {
      if (F.cN) {
        x = '<span class="' + F.cN + '">' + x;
      }
    }
    var w = "";
    var A = 0;
    var v = 0;
    try {
      var u,
        q,
        p = 0;
      while (true) {
        B.t.lastIndex = p;
        u = B.t.exec(G);
        if (!u) {
          break;
        }
        q = D(G.substr(p, u.index - p), u[0]);
        p = u.index + q;
      }
      D(G.substr(p));
      for (var F = B; F.parent; F = F.parent) {
        if (F.cN) {
          x += "</span>";
        }
      }
      return { r: A, keyword_count: v, value: x, language: E, top: B };
    } catch (J) {
      if (J.message.indexOf("Illegal") != -1) {
        return { r: 0, keyword_count: 0, value: l(G) };
      } else {
        throw J;
      }
    }
  }
  function g(s) {
    var o = { keyword_count: 0, r: 0, value: l(s) };
    var q = o;
    for (var p in e) {
      if (!e.hasOwnProperty(p)) {
        continue;
      }
      var r = d(p, s, false);
      r.language = p;
      if (r.keyword_count + r.r > q.keyword_count + q.r) {
        q = r;
      }
      if (r.keyword_count + r.r > o.keyword_count + o.r) {
        q = o;
        o = r;
      }
    }
    if (q.language) {
      o.second_best = q;
    }
    return o;
  }
  function i(q, p, o) {
    if (p) {
      q = q.replace(/^((<[^>]+>|\t)+)/gm, function (r, v, u, t) {
        return v.replace(/\t/g, p);
      });
    }
    if (o) {
      q = q.replace(/\n/g, "<br>");
    }
    return q;
  }
  function m(r, u, p) {
    var v = h(r, p);
    var t = a(r);
    if (t == "no-highlight") {
      return;
    }
    var w = t ? d(t, v, true) : g(v);
    t = w.language;
    var o = c(r);
    if (o.length) {
      var q = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
      q.innerHTML = w.value;
      w.value = j(o, c(q), v);
    }
    w.value = i(w.value, u, p);
    var s = r.className;
    if (!s.match("(\\s|^)(language-)?" + t + "(\\s|$)")) {
      s = s ? s + " " + t : t;
    }
    r.innerHTML = w.value;
    r.className = s;
    r.result = { language: t, kw: w.keyword_count, re: w.r };
    if (w.second_best) {
      r.second_best = {
        language: w.second_best.language,
        kw: w.second_best.keyword_count,
        re: w.second_best.r,
      };
    }
  }
  function n() {
    if (n.called) {
      return;
    }
    n.called = true;
    Array.prototype.map
      .call(
        document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "pre"),
        b,
      )
      .filter(Boolean)
      .forEach(function (o) {
        m(o, hljs.tabReplace);
      });
  }
  function k() {
    window.addEventListener("DOMContentLoaded", n, false);
    window.addEventListener("load", n, false);
  }
  var e = {};
  this.LANGUAGES = e;
  this.highlight = d;
  this.highlightAuto = g;
  this.fixMarkup = i;
  this.highlightBlock = m;
  this.initHighlighting = n;
  this.initHighlightingOnLoad = k;
  this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
  this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
  this.NR = "\\b\\d+(\\.\\d+)?";
  this.CNR =
    "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  this.BNR = "\\b(0b[01]+)";
  this.RSR =
    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  this.BE = { b: "\\\\[\\s\\S]", r: 0 };
  this.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE], r: 0 };
  this.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE], r: 0 };
  this.CLCM = { cN: "comment", b: "//", e: "$" };
  this.CBLCLM = { cN: "comment", b: "/\\*", e: "\\*/" };
  this.HCM = { cN: "comment", b: "#", e: "$" };
  this.NM = { cN: "number", b: this.NR, r: 0 };
  this.CNM = { cN: "number", b: this.CNR, r: 0 };
  this.BNM = { cN: "number", b: this.BNR, r: 0 };
  this.REGEXP_MODE = {
    cN: "regexp",
    b: /\//,
    e: /\/[gim]*/,
    i: /\n/,
    c: [this.BE, { b: /\[/, e: /\]/, r: 0, c: [this.BE] }],
  };
  this.inherit = function (q, r) {
    var o = {};
    for (var p in q) {
      o[p] = q[p];
    }
    if (r) {
      for (var p in r) {
        o[p] = r[p];
      }
    }
    return o;
  };
})();
hljs.LANGUAGES.javascript = (function (a) {
  return {
    k: {
      keyword:
        "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",
      literal: "true false null undefined NaN Infinity",
    },
    c: [
      a.ASM,
      a.QSM,
      a.CLCM,
      a.CBLCLM,
      a.CNM,
      {
        b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, { b: /</, e: />;/, sL: "xml" }],
        r: 0,
      },
      {
        cN: "function",
        bWK: true,
        e: /{/,
        k: "function",
        c: [
          { cN: "title", b: /[A-Za-z$_][0-9A-Za-z$_]*/ },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [a.CLCM, a.CBLCLM],
            i: /["'\(]/,
          },
        ],
        i: /\[|%/,
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.css = (function (a) {
  var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
  var c = {
    cN: "function",
    b: b + "\\(",
    e: "\\)",
    c: ["self", a.NM, a.ASM, a.QSM],
  };
  return {
    cI: true,
    i: "[=/|']",
    c: [
      a.CBLCLM,
      { cN: "id", b: "\\#[A-Za-z0-9_-]+" },
      { cN: "class", b: "\\.[A-Za-z0-9_-]+", r: 0 },
      { cN: "attr_selector", b: "\\[", e: "\\]", i: "$" },
      { cN: "pseudo", b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+" },
      {
        cN: "at_rule",
        b: "@(font-face|page)",
        l: "[a-z-]+",
        k: "font-face page",
      },
      {
        cN: "at_rule",
        b: "@",
        e: "[{;]",
        c: [
          { cN: "keyword", b: /\S+/ },
          { b: /\s/, eW: true, eE: true, r: 0, c: [c, a.ASM, a.QSM, a.NM] },
        ],
      },
      { cN: "tag", b: b, r: 0 },
      {
        cN: "rules",
        b: "{",
        e: "}",
        i: "[^\\s]",
        r: 0,
        c: [
          a.CBLCLM,
          {
            cN: "rule",
            b: "[^\\s]",
            rB: true,
            e: ";",
            eW: true,
            c: [
              {
                cN: "attribute",
                b: "[A-Z\\_\\.\\-]+",
                e: ":",
                eE: true,
                i: "[^\\s]",
                starts: {
                  cN: "value",
                  eW: true,
                  eE: true,
                  c: [
                    c,
                    a.NM,
                    a.QSM,
                    a.ASM,
                    a.CBLCLM,
                    { cN: "hexcolor", b: "#[0-9A-Fa-f]+" },
                    { cN: "important", b: "!important" },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.xml = (function (a) {
  var c = "[A-Za-z0-9\\._:-]+";
  var b = {
    eW: true,
    r: 0,
    c: [
      { cN: "attribute", b: c, r: 0 },
      { b: '="', rB: true, e: '"', c: [{ cN: "value", b: '"', eW: true }] },
      { b: "='", rB: true, e: "'", c: [{ cN: "value", b: "'", eW: true }] },
      { b: "=", c: [{ cN: "value", b: "[^\\s/>]+" }] },
    ],
  };
  return {
    cI: true,
    c: [
      { cN: "pi", b: "<\\?", e: "\\?>", r: 10 },
      {
        cN: "doctype",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [{ b: "\\[", e: "\\]" }],
      },
      { cN: "comment", b: "<!--", e: "-->", r: 10 },
      { cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
      {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: { title: "style" },
        c: [b],
        starts: { e: "</style>", rE: true, sL: "css" },
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: { title: "script" },
        c: [b],
        starts: { e: "</script>", rE: true, sL: "javascript" },
      },
      { b: "<%", e: "%>", sL: "vbscript" },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        r: 0,
        c: [{ cN: "title", b: "[^ /><]+" }, b],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.json = (function (a) {
  var e = { literal: "true false null" };
  var d = [a.QSM, a.CNM];
  var c = { cN: "value", e: ",", eW: true, eE: true, c: d, k: e };
  var b = {
    b: "{",
    e: "}",
    c: [
      {
        cN: "attribute",
        b: '\\s*"',
        e: '"\\s*:\\s*',
        eB: true,
        eE: true,
        c: [a.BE],
        i: "\\n",
        starts: c,
      },
    ],
    i: "\\S",
  };
  var f = { b: "\\[", e: "\\]", c: [a.inherit(c, { cN: null })], i: "\\S" };
  d.splice(d.length, 0, b, f);
  return { c: d, k: e, i: "\\S" };
})(hljs);
