function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=l.querySelector('input[name="delay"]'),a=l.querySelector('input[name="step"]'),s=l.querySelector('input[name="amount"]');l.addEventListener("submit",(t=>{t.preventDefault();const n=Number(u.value),o=Number(a.value),r=Number(s.value);setTimeout((()=>{let t=n,l=1;const u=setInterval((()=>{var n,a;(n=l,a=t,new Promise(((e,t)=>{Math.random()>.3?e({position:n,delay:a}):t({position:n,delay:a})}))).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)})),t+=o,l+=1,l===r+1&&clearInterval(u)}),o)}),n)}));
//# sourceMappingURL=03-promises.5d0b9576.js.map