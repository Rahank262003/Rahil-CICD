(()=>{var e={230:e=>{e.exports=function(e,t){return e+t}},996:e=>{e.exports=function(e,t){if(0==t)throw new Error("Division Not Possible");return e/t}},841:e=>{e.exports=function(e,t){return e*t}},193:e=>{e.exports=function(e,t){return e-t}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(()=>{var e=r(230),t=r(193),n=r(841),o=r(996);function a(){var r,a=parseInt(document.getElementById("firstnumber").value),u=parseInt(document.getElementById("secondnumber").value),c=document.getElementById("operator").value,s=document.getElementById("result");try{switch(c){case"add":r=e(a,u);break;case"subtract":r=t(a,u);break;case"multiply":r=n(a,u);break;case"divide":r=o(a,u);break;default:alert("Error!")}s.textContent="Result: "+r,s.style.color="black"}catch(e){s.textContent="Error: "+e.message,s.style.color="red"}}window.onload=function(){document.getElementById("calculateBtn").addEventListener("click",a)}})()})();