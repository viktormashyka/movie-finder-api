var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire7a6c;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire7a6c=n),n.register("gjiCh",(function(e,t){var r,n,i,l;function s(){const e=document.getElementById("preloader");e.style.display="flex",setTimeout((()=>{e.style.display="none"}),800)}r=e.exports,n="default",i=function(){return s},Object.defineProperty(r,n,{get:i,set:l,enumerable:!0,configurable:!0})}));var i=n("gjiCh");const l=document.querySelector("#activ-homeJs"),s=document.querySelector("#activ-libraryJs"),d=document.querySelector(".form_pdg"),o=document.querySelector(".buttons-library"),a=document.querySelector(".header_bgr");s.addEventListener("click",(function(e){e.preventDefault(),(0,i.default)(),a.classList.add("header_lib__bgr"),l.classList.remove("current"),s.classList.add("current"),o.classList.remove("visually-hidden"),d.classList.add("visually-hidden")})),l.addEventListener("click",(function(e){e.preventDefault(),a.classList.remove("header_lib__bgr"),l.classList.add("current"),s.classList.remove("current"),o.classList.add("visually-hidden"),d.classList.remove("visually-hidden")}));
//# sourceMappingURL=index.5f0946c4.js.map
