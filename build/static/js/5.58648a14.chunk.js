(this["webpackJsonpbrain-vita"]=this["webpackJsonpbrain-vita"]||[]).push([[5],{56:function(n,e,t){"use strict";t.r(e);var a=t(7),r=t(24),i=t(53),o=t(0),c=t.n(o),u=t(23),l=t(11);function f(n){return function(e){var t;e((t=n,{type:l.c,payload:t}))}}function s(n){return function(e){var t;e((t=n,{type:l.d,payload:t}))}}function b(n){return function(e){var t;e((t=n,{type:l.e,payload:t}))}}function d(n){return function(e){var t;e((t=n,{type:l.a,payload:t}))}}function h(){return function(n){n({type:l.b})}}var v=t(45),x=t(46);function p(){var n=Object(v.a)(["\n  width: 30%;\n  height: 46px;\n  background-color: #0ba90b;\n  color: white;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 24px;\n  border: 0;\n  border-radius: 8px;\n"]);return p=function(){return n},n}function j(){var n=Object(v.a)(["\n  width: 65%;\n  height: 40px;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n  border: ",";\n\n  &:focus {\n    outline: none;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(v.a)(["\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 16px;\n\n  @media (min-width: 768px) {\n    width: 50%;\n    margin: 0 auto;\n  }\n"]);return O=function(){return n},n}function y(){var n=Object(v.a)(["\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 36px;\n  margin-bottom: 16px;\n"]);return y=function(){return n},n}function g(){var n=Object(v.a)(["\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 24px;\n"]);return g=function(){return n},n}function m(){var n=Object(v.a)(["\n  flex-direction: column;\n"]);return m=function(){return n},n}function w(){var n=Object(v.a)(["\n  display: flex;\n"]);return w=function(){return n},n}var S=x.a.div(w()),k=Object(x.a)(S)(m()),z=x.a.label(g()),C=x.a.label(y()),M=Object(x.a)(S)(O()),E=x.a.input(j(),(function(n){return n.isValid?"2px solid #7fb5dd":"2px solid #db0d16"})),P=x.a.button(p()),R=Object(o.lazy)((function(){return t.e(4).then(t.bind(null,57))})),V=function(){var n=Object(u.b)(),e=Object(o.useState)(32),t=Object(i.a)(e,2),c=t[0],l=t[1],v=Object(o.useState)(""),x=Object(i.a)(v,2),p=x[0],j=x[1],O=Object(o.useState)(!0),y=Object(i.a)(O,2),g=y[0],m=y[1],w=Object(u.c)((function(n){return n.homepage})),S=w.boardStatus,V=w.firstCord,I=w.isFirstCordSelected,J=function(){return n(d(!I))},U=function(){n(h()),l(32)};return Object(a.jsxs)(o.Suspense,{fallback:"",children:[Object(a.jsx)("h1",{children:"Brain Vita"}),Object(a.jsxs)(k,{children:[Object(a.jsx)(z,{children:"Marbels Remaining"}),Object(a.jsx)(C,{children:c})]}),Object(a.jsx)(R,{boardStatus:S,handleOnSquareClick:function(e,t,a){"dead"!==a&&(I?I&&("hole"===a?(J(),n(b({x:e,y:t})),function(n,e){return V.x!==n&&V.y!==e?(alert("No Diagonal moves are allowed"),!1):V.x===n?2===Math.abs(V.y-e)&&"alive"===S[V.x][V.y>e?V.y-1:V.y+1]||(alert("Invalid Move!!!"),!1):V.y===e?2===Math.abs(V.x-n)&&"alive"===S[V.x>n?V.x-1:V.x+1][V.y]||(alert("Invalid Move!!!"),!1):void 0}(e,t)&&(!function(e,t,a){var i=Object(r.a)(S);a?i.map((function(n,e){return e===V.x?(n[V.y]="hole",n[V.y>t?V.y-1:V.y+1]="hole",n[t]="alive",n):n})):i.map((function(n,a){return a===V.x||a===(V.x>e?V.x-1:V.x+1)?(n[V.y]="hole",n):a===e?(n[t]="alive",n):n})),n(f(Object(r.a)(i)))}(e,t,V.x===e),l(function(){var n=0;return S.forEach((function(e){return e.forEach((function(e){"alive"===e&&n++}))})),n}()),function(){var n=0;return S.forEach((function(e,t){return e.forEach((function(e,a){"hole"===e&&("alive"===(S[t]&&S[t][a+1])&&"alive"===(S[t]&&S[t][a+2])||S[t]&&"alive"===S[t][a-1]&&"alive"===(S[t]&&S[t][a-2])||"alive"===(S[t+1]&&S[t+1][a])&&"alive"===(S[t+2]&&S[t+2][a])||"alive"===(S[t-1]&&S[t-1][a])&&"alive"===(S[t-2]&&S[t-2][a]))&&n++}))})),n>0}()||(alert("no more moves left"),U()))):alert("Please select blank tile!")):"hole"!==a?(J(),n(s({x:e,y:t}))):alert("Please select approprite first tile!"))},handleOnResetClick:U}),Object(a.jsxs)(M,{children:[Object(a.jsx)(E,{type:"text",onChange:function(n){var e=n.target.value;/^[^-\s][a-zA-Z ]+$/.test(String(e))?(m(!0),j(e)):m(!1)},isValid:g,placeholder:"Username"}),Object(a.jsx)(P,{onClick:function(){g?console.log("Username: "+p+" | Marbels Remaining : "+c):alert("Please enter valid username!!")},disabled:!g,children:"Submit"})]})]})};e.default=c.a.memo(V)}}]);
//# sourceMappingURL=5.58648a14.chunk.js.map