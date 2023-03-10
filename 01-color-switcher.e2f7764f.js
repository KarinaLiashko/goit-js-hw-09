let t=null;document.querySelector("[data-start]").addEventListener("click",(function(){t=setInterval((function(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),document.querySelector("[data-stop]").addEventListener("click",(function(){clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.e2f7764f.js.map
