var x=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};var s=(e,t,i)=>(x(e,t,"read from private field"),i?i.call(e):t.get(e)),o=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a=(e,t,i,k)=>(x(e,t,"write to private field"),k?k.call(e,i):t.set(e,i),i);var r=(e,t,i)=>(x(e,t,"access private method"),i);const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))k(n);new MutationObserver(n=>{for(const h of n)if(h.type==="childList")for(const S of h.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&k(S)}).observe(document,{childList:!0,subtree:!0});function i(n){const h={};return n.integrity&&(h.integrity=n.integrity),n.referrerpolicy&&(h.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?h.credentials="include":n.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function k(n){if(n.ep)return;n.ep=!0;const h=i(n);fetch(n.href,h)}};Q();const B=e=>document.getElementById(e),U=[(e,t)=>t,(e,t)=>e+t,(e,t)=>e-t,(e,t)=>e*t,(e,t)=>e/t];var f,l,d,u,p,b,E,g,I,_,j,w,W,C,Y,$,z,v,A,N,H,M,Z,m,y;class V{constructor(t){o(this,_);o(this,w);o(this,C);o(this,$);o(this,v);o(this,N);o(this,M);o(this,m);o(this,f,void 0);o(this,l,0);o(this,d,0);o(this,u,!1);o(this,p,!1);o(this,b,!0);o(this,E,0);o(this,g,0);o(this,I,new Intl.NumberFormat);a(this,f,t)}digit(t){a(this,b,!0),s(this,f).textContent=r(this,w,W).call(this,t)}del(){s(this,f).textContent=r(this,C,Y).call(this)}comma(){a(this,u,!0),s(this,f).textContent=r(this,v,A).call(this)}add(){r(this,m,y).call(this,1)}div(){r(this,m,y).call(this,4)}mul(){r(this,m,y).call(this,3)}sub(){r(this,m,y).call(this,2)}equal(){r(this,m,y).call(this,0)}reset(){r(this,m,y).call(this,0),r(this,$,z).call(this),s(this,f).textContent="0"}}f=new WeakMap,l=new WeakMap,d=new WeakMap,u=new WeakMap,p=new WeakMap,b=new WeakMap,E=new WeakMap,g=new WeakMap,I=new WeakMap,_=new WeakSet,j=function(t,i){return t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER?i:t},w=new WeakSet,W=function(t){return s(this,u)?(a(this,d,s(this,d)*10+t),a(this,p,!0)):a(this,l,r(this,_,j).call(this,s(this,l)*10+t,s(this,l))),r(this,v,A).call(this)},C=new WeakSet,Y=function(){return s(this,u)?(s(this,d)==0&&a(this,u,!1),a(this,d,Math.floor(s(this,d)/10)),s(this,d)==0&&a(this,p,!1)):a(this,l,r(this,_,j).call(this,Math.floor(s(this,l)/10),s(this,l))),r(this,v,A).call(this)},$=new WeakSet,z=function(){a(this,u,!1),a(this,p,!1),a(this,d,0),a(this,l,0)},v=new WeakSet,A=function(){return`${r(this,N,H).call(this,s(this,l))}${s(this,u)?`.${s(this,p)?s(this,d):""}`:""}`},N=new WeakSet,H=function(t){return s(this,I).format(t)},M=new WeakSet,Z=function(){return parseFloat(`${s(this,l)}${s(this,u)?`.${s(this,d)}`:""}`)},m=new WeakSet,y=function(t){var i;if(s(this,b)){a(this,b,!1),a(this,E,U[s(this,g)](s(this,E),r(this,M,Z).call(this))),r(this,$,z).call(this);let k=Math.floor(s(this,E)),n=parseInt((i=s(this,E).toString().split(".")[1])!=null?i:""),h=n>0;s(this,f).textContent=`${r(this,N,H).call(this,k)}${h?`.${n}`:""}`}a(this,g,t)};let c=new V(B("scr"));const O=B("theme"),L=B("theme-switch");let F=0;const tt=()=>{L==null||L.classList.remove("theme1","theme2","theme3"),L==null||L.classList.add(`theme${F+1}`)},et=()=>{document.body.classList.remove("theme-1","theme-2","theme-3"),document.body.classList.add(`theme-${F+1}`)};O==null||O.addEventListener("click",function(){F+=1,F%=3,tt(),et()});const st=[0,1,2,3,4,5,6,7,8,9],J=e=>B(`key${e}`),it=st.map(J),[q,T,K,P,R,D,G,X]=["Del","Add","Sub","Mul","Div","Reset","Equal","Comma"].map(J);it.forEach((e,t)=>{e==null||e.addEventListener("click",i=>c.digit(t))});q==null||q.addEventListener("click",e=>c.del());D==null||D.addEventListener("click",e=>c.reset());X==null||X.addEventListener("click",e=>c.comma());T==null||T.addEventListener("click",e=>c.add());R==null||R.addEventListener("click",e=>c.div());P==null||P.addEventListener("click",e=>c.mul());K==null||K.addEventListener("click",e=>c.sub());G==null||G.addEventListener("click",e=>c.equal());window.addEventListener("keydown",function(e){let t=parseInt(e.key);if(!isNaN(t))c.digit(t);else switch(e.key){case".":c.comma();break;case"-":c.sub();break;case"+":c.add();break;case"/":c.div();break;case"=":case"Enter":c.equal();break;case"Backspace":c.del();break;case"c":c.reset();break}});